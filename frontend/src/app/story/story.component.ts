import {Component, OnInit, Input} from '@angular/core';
import {IStory} from '../../../../shared/story-types';
import {StoryService} from '../story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input() story: IStory;

  constructor(private storyService: StoryService) {}

  ngOnInit() {
    this.storyService.load(this.story);
    this.storyService.start();
  }
}
