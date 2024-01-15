import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-del-dialog',
  templateUrl: './del-dialog.component.html',
  styleUrls: ['./del-dialog.component.scss']
})
export class DelDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DelDialogComponent>) {}

  ngOnInit(): void {
  }

}
