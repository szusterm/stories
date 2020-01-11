import {Component, Input} from '@angular/core';
import {IChoiceBlock} from '../../../../../shared/story-types';
import {StoryService} from '../story.service';
import {ActionConfirmationService} from '../../action-confirmation/action-confirmation.service';

@Component({
  selector: 'app-choice-block',
  templateUrl: './choice-block.component.html',
  styleUrls: ['./choice-block.component.scss']
})
export class ChoiceBlockComponent {
  static CONFIRMATION_CONTENT = 'Do you want to change the course of story?';
  static CONFIRMATION_BUTTON = 'Change';

  @Input() block: IChoiceBlock;
  @Input() index: number;
  @Input() isLast: boolean;

  private _selectedId: number;

  constructor(
    private _storyService: StoryService,
    private _actionConfirmationService: ActionConfirmationService
  ) {}

  private _makeChoiceWithConfirmation(choiceId: number) {
    if (this._selectedId !== choiceId) {
      if (this.isLast) {
        this._makeChoice(choiceId);
      }
      else {
        this._actionConfirmationService.openDialog(
          () => this._makeChoice(choiceId),
          {
            contentText: ChoiceBlockComponent.CONFIRMATION_CONTENT,
            confirmationButtonText: ChoiceBlockComponent.CONFIRMATION_BUTTON
          }
        );
      }
    }
  }

  private _makeChoice(choiceId: number) {
    const chosen = this._storyService.go(this.index).next(choiceId);

    if (chosen) {
      this._selectedId = choiceId;
    }
  }
}
