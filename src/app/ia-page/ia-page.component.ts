import { Component } from '@angular/core';

@Component({
  selector: 'app-ia-page',
  templateUrl: './ia-page.component.html',
  styleUrl: './ia-page.component.css'
})
export class IaPageComponent {



  isVisible = false;

  show(): void {
    this.isVisible = true;
  }

  hide(): void {
    this.isVisible = false;
  }

  

}
