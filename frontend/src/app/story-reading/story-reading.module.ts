import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoryReaderComponent} from './story-reader/story-reader.component';
import {TextBlockComponent} from './text-block/text-block.component';
import {ChoiceBlockComponent} from './choice-block/choice-block.component';
import {EndingBlockComponent} from './ending-block/ending-block.component';


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
    CommonModule
  ]
})
export class StoryReadingModule { }
