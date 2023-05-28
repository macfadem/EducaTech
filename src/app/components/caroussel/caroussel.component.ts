import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent {
  @Input() images: string[] = [];

  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "dots": true, 
    "infinite": true
  };
}
