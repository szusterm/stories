import {Component, OnInit, Input} from '@angular/core';
import {IChoiceBlock} from '../../../../shared/story-types';

@Component({
  selector: 'app-choice-block',
  templateUrl: './choice-block.component.html',
  styleUrls: ['./choice-block.component.scss']
})
export class ChoiceBlockComponent implements OnInit {
  @Input() block: IChoiceBlock;

  constructor() { }

  ngOnInit() {
  }

}
