import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface IConfirmationDialogData {
  contentText?: string;
  confirmationButtonText?: string;
  cancelButtonText?: string;
}

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  public static DEFAULT_CONTENT_TEXT = 'Do you want confirm?';
  public static DEFAULT_CONFIRMATION_TEXT = 'Confirm';
  public static DEFAULT_CANCEL_TEXT = 'Cancel';

  private _preparedDialogData: IConfirmationDialogData;

  constructor(
    private _dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _dialogData: IConfirmationDialogData
  ) {}

  ngOnInit() {
    this._prepareDialogData();
  }

  private _closeDialog() {
    this._dialogRef.close();
  }

  private _prepareDialogData() {
    const {DEFAULT_CONTENT_TEXT, DEFAULT_CONFIRMATION_TEXT, DEFAULT_CANCEL_TEXT} = ConfirmationDialogComponent;

    this._preparedDialogData = {
      contentText: DEFAULT_CONTENT_TEXT,
      confirmationButtonText: DEFAULT_CONFIRMATION_TEXT,
      cancelButtonText: DEFAULT_CANCEL_TEXT
    };

    if (this._dialogData) {
      const {contentText, confirmationButtonText, cancelButtonText} = this._dialogData;

      if (contentText) {
        this._preparedDialogData.contentText = contentText;
      }

      if (confirmationButtonText) {
        this._preparedDialogData.confirmationButtonText = confirmationButtonText;
      }

      if (cancelButtonText) {
        this._preparedDialogData.cancelButtonText = cancelButtonText;
      }
    }
  }
}
