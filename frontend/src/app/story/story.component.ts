import {Component, OnInit, Input} from '@angular/core';
import {IBlock, IStory} from '../../../../shared/story-types';
import {StoryService} from '../story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input() story: IStory;

  constructor(private _storyService: StoryService) {}

  ngOnInit() {
    this._storyService.load(this.story);
    this._storyService.start();
  }
}
