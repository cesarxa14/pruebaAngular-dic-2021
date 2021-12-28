import { Component, OnInit, ViewChild, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {NgbCarouselConfig, NgbCarousel} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-features-modal',
  templateUrl: './features-modal.component.html',
  styleUrls: ['./features-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeaturesModalComponent implements OnInit {

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  @Output() exit: any = new EventEmitter();

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.carousel.cycle();
  }
  close(){
    this.exit.emit();
  }

}
