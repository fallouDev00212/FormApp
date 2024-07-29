import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(100%)' }),
        animate('1s ease', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)' }),
        animate('1s ease', style({ transform: 'translateX(0%)' }))
      ]),
    ])
  ]

})
export class LoginComponent  {
  constructor(private router: Router) { }
  username: string = '';
  password: string = '';

  onSubmit() {
    // alert("alerte");
    // this.router.navigate(['/signup']);
  }


}
