import {Injectable} from '@angular/core';
import {BlockType, IBlock, IChoiceBlock, IStory, ITarget, ITextBlock} from '../../../../shared/story-types';

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
      this._next();
    }
  }

  go(index: number) {
    if (!this._isCorrectCourseId(index)) {
      return;
    }

    return {
      next: (choiceId?: number) => {
        this._revert(index);
        return this._next(choiceId);
      }
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

  isEndingBlock(block: IBlock) {
    return block === undefined;
  }

  private _pushBlock(block: IBlock) {
    this._course.push(block);
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

  private _next(choiceId?: number) {
    const block = this._last();

    if (this.isChoiceBlock(block)) {
      return this._nextForChoiceBlock(block as IChoiceBlock, choiceId);
    }
    if (this.isTextBlock(block)) {
      return this._nextForTextBlock(block as ITextBlock);
    }

    return true;
  }

  private _nextForChoiceBlock(block: IChoiceBlock, choiceId: number) {
    const choiceBlock = block as IChoiceBlock;

    if (this._isCorrectChoice(choiceBlock, choiceId)) {
      const {target} = choiceBlock.choices[choiceId];

      if (target) {
        this._pushBlock(this._findBlock(target));
        this._next();

        return true;
      }
    }

    return false;
  }

  private _nextForTextBlock(block: ITextBlock) {
    const {target} = block as ITextBlock;

    if (target) {
      this._pushBlock(this._findBlock(target));
      this._next();

      return true;
    }

    this._pushBlock(undefined);
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
