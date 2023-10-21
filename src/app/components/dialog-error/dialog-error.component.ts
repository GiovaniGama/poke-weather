import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-error',
  templateUrl: './dialog-error.component.html',
  styleUrls: ['./dialog-error.component.scss']
})
export class DialogErrorComponent {
  constructor(public dialogRef: MatDialogRef<DialogErrorComponent>, @Inject(MAT_DIALOG_DATA) public messageErr: string = 'Error loading data!') {}
}
