import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { TextBlockComponent } from './text-block/text-block.component';
import { ChoiceBlockComponent } from './choice-block/choice-block.component';
import { EndingBlockComponent } from './ending-block/ending-block.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    TextBlockComponent,
    ChoiceBlockComponent,
    EndingBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
