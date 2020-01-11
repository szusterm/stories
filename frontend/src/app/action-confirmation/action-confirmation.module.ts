import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionConfirmationService} from './action-confirmation.service';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [ConfirmationDialogComponent],
  entryComponents: [ConfirmationDialogComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [ActionConfirmationService]
})
export class ActionConfirmationModule {}
