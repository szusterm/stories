import {Component, OnInit, Input} from '@angular/core';
import {IStory} from '../../../../shared/storyTypes';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input() story: IStory;

  constructor() {
  }

  ngOnInit() {
  }

}
