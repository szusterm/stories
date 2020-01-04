import {Injectable} from '@angular/core';
import {BlockType, IBlock, IChoiceBlock, IStory, ITextBlock} from '../../../shared/story-types';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private story;
  private course: IBlock[] = [];

  load(story: IStory) {
    this.story = story;
    this.start();
  }

  start() {
    this.course = [];

    if (this.story.startTarget) {
      const {type, targetId} = this.story.startTarget;
      const startBlock = this._findBlock(type, targetId);

      this.course.push(startBlock);
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

  isTextBlock(block: IBlock) {
    return !this.isChoiceBlock(block);
  }

  isChoiceBlock(block: IBlock) {
    return (block as IChoiceBlock).choices !== undefined;
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
          this.course.push(this._findBlock(target.type, target.targetId));
          return true;
        }
      }
    }
    else if (this.isTextBlock(block)) {
      const current = this._last() as ITextBlock;
      const {target} = current;

      if (target) {
        this.course.push(this._findBlock(target.type, target.targetId));
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

  private _findBlock(type: BlockType, targetId: string): IBlock {
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
