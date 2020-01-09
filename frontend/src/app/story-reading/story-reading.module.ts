import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MatButtonModule} from '@angular/material/button';

import {StoryReaderComponent} from './story-reader/story-reader.component';
import {ChoiceBlockComponent} from './choice-block/choice-block.component';
import {EndingBlockComponent} from './ending-block/ending-block.component';
import {TextBlockComponent} from './text-block/text-block.component';
import { ChoiceButtonComponent } from './choice-button/choice-button.component';


@NgModule({
  declarations: [
    StoryReaderComponent,
    TextBlockComponent,
    ChoiceBlockComponent,
    EndingBlockComponent,
    ChoiceButtonComponent
  ],
  exports: [
    StoryReaderComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class StoryReadingModule { }
