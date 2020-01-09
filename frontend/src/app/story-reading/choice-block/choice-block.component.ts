import {Component, Input} from '@angular/core';
import {IChoiceBlock} from '../../../../../shared/story-types';
import {StoryService} from '../story.service';

@Component({
  selector: 'app-choice-block',
  templateUrl: './choice-block.component.html',
  styleUrls: ['./choice-block.component.scss']
})
export class ChoiceBlockComponent {
  @Input() block: IChoiceBlock;
  @Input() index: number;

  private _selectedId: number;

  constructor(private _storyService: StoryService) { }

  private _makeChoice(choiceId: number) {
    const chosen = this._storyService.go(this.index).next(choiceId);

    if (chosen) {
      this._selectedId = choiceId;
    }
  }
}
