import { Component,ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IaPageComponent } from '../ia-page/ia-page.component';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrl: './form-dialog.component.css'
})
export class FormDialogComponent {

  isVisible = false;

  show(): void {
    this.isVisible = true;
  }

  hide(): void {
    this.isVisible = false;
  }
  
  @ViewChild('dialog') openDialog!: IaPageComponent

  openDialog2(): void {
      this.openDialog.show();    
  }
  
}
