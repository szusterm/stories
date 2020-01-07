import {Component, OnInit, Input} from '@angular/core';
import {IStory} from '../../../../../shared/story-types';
import {StoryService} from '../story.service';

@Component({
  selector: 'app-story-reader',
  templateUrl: './story-reader.component.html',
  styleUrls: ['./story-reader.component.scss']
})
export class StoryReaderComponent implements OnInit {
  @Input() story: IStory;

  constructor(private _storyService: StoryService) {}

  ngOnInit() {
    this._storyService.load(this.story);
    this._storyService.start();
  }
}
