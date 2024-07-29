import { Component, OnInit, NgZone } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
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
export class CarouselComponent implements OnInit {

  currentSlide = 0;
  intervalId: any;

  images = [
    "https://forms.app/static/img/auth-slider4.png",
    'https://forms.app/static/img/auth-slider2.png',
    "https://forms.app/static/img/auth-slider3.png",
    

  ]

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.startAutoSlide();
    });
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.ngZone.run(() => {
        this.nextSlide();
      });
    }, 3000); // Change slide every 3 seconds
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) %this.images.length;
    console.log('Current Slide:', this.currentSlide);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
