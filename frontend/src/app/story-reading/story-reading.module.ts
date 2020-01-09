import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';

import {StoryReaderComponent} from './story-reader/story-reader.component';
import {ChoiceBlockComponent} from './choice-block/choice-block.component';
import {EndingBlockComponent} from './ending-block/ending-block.component';
import {TextBlockComponent} from './text-block/text-block.component';


@NgModule({
  declarations: [
    StoryReaderComponent,
    TextBlockComponent,
    ChoiceBlockComponent,
    EndingBlockComponent
  ],
  exports: [
    StoryReaderComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class StoryReadingModule { }
