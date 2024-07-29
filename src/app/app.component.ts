import { Component, ViewChild  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { IaPageComponent } from './ia-page/ia-page.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  @ViewChild(FormDialogComponent) dialog!: FormDialogComponent;

  openDialog(): void {
    this.dialog.show();
  }

  @ViewChild(IaPageComponent) dialog2!: IaPageComponent;

  openDialog2(): void {
    this.dialog2.show();
  }

  title = 'FormApp';
  username: string = ''; // Assurez-vous que username est défini
  password: string = ''; // Assurez-vous que password est défini

}
