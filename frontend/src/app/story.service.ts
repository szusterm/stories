import {Injectable} from '@angular/core';
import story from './mock-story';
import {BlockType, IBlock, IChoiceBlock, ITextBlock} from '../../../shared/story-types';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private story = story;
  private course: IBlock[] = [];

  start() {
    this.course = [];

    if (this.story.startTarget) {
      const {type, targetId} = this.story.startTarget;
      const startBlock = this.findBlock(type, targetId);

      this.course.push(startBlock);
    }
  }

  next(choiceId?: number) {
    if (choiceId && this.isChoiceBlock(this.current())) {
      const current = this.current() as IChoiceBlock;

      if (this.isCorrectChoice(choiceId, current)) {
        const {target} = current.choices[choiceId];

        if (target) {
          this.course.push(this.findBlock(target.type, target.targetId));
          return true;
        }
      }
    }
    else if (this.isTextBlock(this.current())) {
      const current = this.current() as ITextBlock;
      const {target} = current;

      if (target) {
        this.course.push(this.findBlock(target.type, target.targetId));
        return true;
      }
    }

    return false;
  }

  current(): IBlock | undefined {
    if (this.course.length <= 1) {
      return;
    }

    return this.course[this.course.length - 2];
  }

  isTextBlock(block: IBlock) {
    return !this.isChoiceBlock(block);
  }

  isChoiceBlock(block: IBlock) {
    return (block as IChoiceBlock).choices !== undefined;
  }

  private isCorrectChoice(index: number, block: IChoiceBlock) {
    return (index >= 0 && index < block.choices.length);
  }

  private findBlock(type: BlockType, targetId: string): IBlock {
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
