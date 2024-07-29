import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IaPageComponent } from '../ia-page/ia-page.component';

import { FormDialogComponent } from '../form-dialog/form-dialog.component';// Chemin vers votre composant de dialogue


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

  @ViewChild('dialog') dialog!: FormDialogComponent


  openDialog(): void {

      this.dialog.show();
    
  }
}
