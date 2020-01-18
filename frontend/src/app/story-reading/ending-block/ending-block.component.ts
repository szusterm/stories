import {Component} from '@angular/core';
import {StoryService} from '../story.service';
import {ActionConfirmationService} from '../../action-confirmation/action-confirmation.service';

@Component({
  selector: 'app-ending-block',
  templateUrl: './ending-block.component.html',
  styleUrls: ['./ending-block.component.scss']
})
export class EndingBlockComponent {
  static RESTART_CONFIRMATION_TEXT = 'Do you want to restart the story?';
  static RESTART_CONFIRMATION_BUTTON = 'Restart';

  constructor(
    private _storyService: StoryService,
    private _actionConfirmationService: ActionConfirmationService
  ) {}

  private _restartStoryWithConfirmation() {
    this._actionConfirmationService.openDialog(
      () => this._storyService.start(),
      {
        contentText: EndingBlockComponent.RESTART_CONFIRMATION_TEXT,
        confirmationButtonText: EndingBlockComponent.RESTART_CONFIRMATION_BUTTON
      }
      );
  }
}
