import {Component, Input} from '@angular/core';
import {ITextBlock} from '../../../../../shared/story-types';
import {StoryService} from '../story.service';

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss']
})
export class TextBlockComponent {
  @Input() block: ITextBlock;
  @Input() index: number;

  constructor(private _storyService: StoryService) {}
}
