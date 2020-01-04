import {Injectable} from '@angular/core';
import {BlockType, IBlock, IChoiceBlock, IStory, ITarget, ITextBlock} from '../../../shared/story-types';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private story: IStory;
  private course: IBlock[] = [];

  load(story: IStory) {
    this.story = story;
    this.start();
  }

  start() {
    this.course = [];
    const {startTarget} = this.story;

    if (startTarget) {
      const startBlock = this._findBlock(startTarget);
      this._pushBlock(startBlock);
    }
  }

  get(index: number) {
    if (!this._isCorrectCourseId(index)) {
      return;
    }

    const block = this.course[index];

    this._revert(index);

    return {
      next: (choiceId?: number) => this._next(block, choiceId)
    };
  }

  getCourse() {
    return this.course;
  }

  isTextBlock(block: IBlock) {
    return block && !this.isChoiceBlock(block);
  }

  isChoiceBlock(block: IBlock) {
    return block && (block as IChoiceBlock).choices !== undefined;
  }

  private _pushBlock(block: IBlock) {
    if (block) {
      this.course.push(block);
    }
  }

  private _revert(index: number) {
    if (!this._isCorrectCourseId(index)) {
      return;
    }

    const block = this.course[index];

    if (block === this._last()) {
      return;
    }

    this.course = this.course.slice(0, index + 1);
  }

  private _next(block: IBlock, choiceId?: number) {
    if (choiceId && this.isChoiceBlock(block)) {
      const choiceBlock = block as IChoiceBlock;

      if (this._isCorrectChoice(choiceBlock, choiceId)) {
        const {target} = choiceBlock.choices[choiceId];

        if (target) {
          this._pushBlock(this._findBlock(target));
          return true;
        }
      }
    }
    else if (this.isTextBlock(block)) {
      const {target} = this._last() as ITextBlock;

      if (target) {
        this._pushBlock(this._findBlock(target));
        return true;
      }
    }

    return false;
  }

  private _last(): IBlock | undefined {
    if (this.course.length <= 1) {
      return;
    }

    return this.course[this.course.length - 2];
  }

  private _isCorrectCourseId(index: number) {
    return (index >= 0 && index < this.course.length);
  }

  private _isCorrectChoice(block: IChoiceBlock, index: number) {
    return (index >= 0 && index < block.choices.length);
  }

  private _findBlock({type, targetId}: ITarget): IBlock {
    let blocksList: IBlock[] = [];

    switch (type) {
      case BlockType.TEXT:
        blocksList = this.story.blocks.texts;
        break;
      case BlockType.CHOICE:
        blocksList = this.story.blocks.choices;
        break;
    }

    return blocksList.find(block => block._id === targetId);
  }
}
