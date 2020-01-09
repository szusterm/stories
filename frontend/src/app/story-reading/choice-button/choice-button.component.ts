import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-choice-button',
  templateUrl: './choice-button.component.html',
  styleUrls: ['./choice-button.component.scss']
})
export class ChoiceButtonComponent {
  @Input() text: string;
  @Input() selected: boolean;
}
