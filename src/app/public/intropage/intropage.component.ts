import { Component, OnInit ,ViewChild } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource , NgbModule ,NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule ,Router  } from '@angular/router';

@Component({
  selector: 'app-intropage',
  templateUrl: './intropage.component.html',
  styleUrls: ['./intropage.component.css']
})
export class IntropageComponent implements OnInit {
 @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  navigateToSlide(item) {
    this.ngCarousel.select(item);
    console.log(item)
  }

  // Move to previous slide
  getToPrev() {
    this.ngCarousel.prev();
  }

  // Move to next slide
  goToNext() {
    this.ngCarousel.next();
  }
  

  // Pause slide
  stopCarousel() {
    this.ngCarousel.pause();
  }

  // Restart carousel
  restartCarousel() {
    this.ngCarousel.cycle();
  }
  next(){
   this.router.navigate(['/login']); 
  }

}
