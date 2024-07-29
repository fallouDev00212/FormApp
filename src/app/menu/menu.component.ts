import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    // navLinks.classList.toggle('active');
  }
}
