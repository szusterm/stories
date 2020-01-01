import {Component, Input, OnInit} from '@angular/core';
import {ITextBlock} from '../../../../shared/storyTypes';

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss']
})
export class TextBlockComponent implements OnInit {
  @Input() block: ITextBlock;

  ngOnInit() {
  }
}
