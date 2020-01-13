import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {
  ConfirmationDialogComponent,
  IConfirmationDialogData
} from './confirmation-dialog/confirmation-dialog.component';

@Injectable()
export class ActionConfirmationService {
  constructor(private _dialog: MatDialog) {}

  openDialog(onConfirm?: () => void, data?: IConfirmationDialogData) {
    const dialogRef = this._dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data
    });

    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed && onConfirm) {
        onConfirm();
      }
    });
  }
}
