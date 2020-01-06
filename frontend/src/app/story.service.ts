import {Injectable} from '@angular/core';
import {BlockType, IBlock, IChoiceBlock, IStory, ITarget, ITextBlock} from '../../../shared/story-types';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private _story: IStory;
  private _course: IBlock[] = [];

  load(story: IStory) {
    this._story = story;
    this.start();
  }

  start() {
    this._course = [];
    const {startTarget} = this._story;

    if (startTarget) {
      const startBlock = this._findBlock(startTarget);
      this._pushBlock(startBlock);
      this._next(startBlock);
    }
  }

  get(index: number) {
    if (!this._isCorrectCourseId(index)) {
      return;
    }

    const block = this._course[index];

    this._revert(index);

    return {
      next: (choiceId?: number) => this._next(block, choiceId)
    };
  }

  getCourse() {
    return this._course;
  }

  isTextBlock(block: IBlock) {
    return block && (block as ITextBlock).content !== undefined;
  }

  isChoiceBlock(block: IBlock) {
    return block && (block as IChoiceBlock).choices !== undefined;
  }

  private _pushBlock(block: IBlock) {
    if (block) {
      this._course.push(block);
    }
  }

  private _revert(index: number) {
    if (!this._isCorrectCourseId(index)) {
      return;
    }

    const block = this._course[index];

    if (block === this._last()) {
      return;
    }

    this._course = this._course.slice(0, index + 1);
  }

  private _next(block: IBlock, choiceId?: number) {
    if (this.isChoiceBlock(block)) {
      return this._nextChoiceBlock(block as IChoiceBlock, choiceId);
    }
    if (this.isTextBlock(block)) {
      return this._nextTextBlock(block as ITextBlock);
    }

    return false;
  }

  private _nextChoiceBlock(block: IChoiceBlock, choiceId: number) {
    const choiceBlock = block as IChoiceBlock;

    if (this._isCorrectChoice(choiceBlock, choiceId)) {
      const {target} = choiceBlock.choices[choiceId];

      if (target) {
        const nextBlock = this._findBlock(target);

        this._pushBlock(nextBlock);
        this._next(nextBlock);

        return true;
      }
    }

    return false;
  }

  private _nextTextBlock(block: ITextBlock) {
    const {target} = block as ITextBlock;

    if (target) {
      this._pushBlock(this._findBlock(target));
      this._next(this._last());
      return true;
    }

    return false;
  }

  private _last(): IBlock | undefined {
    if (this._course.length === 0) {
      return;
    }

    return this._course[this._course.length - 1];
  }

  private _findBlock({type, targetId}: ITarget): IBlock {
    let blocksList: IBlock[] = [];

    switch (type) {
      case BlockType.TEXT:
        blocksList = this._story.blocks.texts;
        break;
      case BlockType.CHOICE:
        blocksList = this._story.blocks.choices;
        break;
    }

    return blocksList.find(block => block._id === targetId);
  }

  private _isCorrectCourseId(index: number) {
    return (index >= 0 && index < this._course.length);
  }

  private _isCorrectChoice(block: IChoiceBlock, index: number) {
    return (index >= 0 && index < block.choices.length);
  }
}
