import {Component, OnInit} from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css'; // Import default Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Navigation, Pagination} from 'swiper/modules';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './hero.component.html',
  standalone: true,
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  /** Leading `/` anchors to site root so assets load on any route (e.g. after visiting /products) — matches `/bks-logo.png`. */
  images = [
    { src: '/assets/images/bks1.jpeg', alt: 'Green pea seed production and agronomy at Bundelkhand Seeds facilities' },
    { src: '/assets/images/bks2.jpeg', alt: 'Pea crop stand in Bundelkhand growing region fields' },
    { src: '/assets/images/bks3.jpeg', alt: 'Quality vegetable seed grading and conditioning line' },
    { src: '/assets/images/bks4.jpeg', alt: 'Farmers inspecting pea pod development during Rabi season' },
    { src: '/assets/images/bks5.jpeg', alt: 'Seed processing equipment for vegetable pea genetics' },
    { src: '/assets/images/bks6.jpeg', alt: 'Harvested pea plants ready for threshing operations' },
    { src: '/assets/images/bks7.jpeg', alt: 'Field trial plots comparing pea varieties' },
    { src: '/assets/images/bks8.jpeg', alt: 'Packaged pea seed sacks prepared for distributor dispatch' },
    { src: '/assets/images/bks9.jpeg', alt: 'Irrigated pea cultivation in Uttar Pradesh farmland' },
    { src: '/assets/images/bks10.jpeg', alt: 'Close-up of healthy green pea pods in the field' },
    { src: '/assets/images/bks11.jpeg', alt: 'Bundelkhand Seeds team with growers at demonstration plot' },
  ];

  ngOnInit(): void {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      modules: [Pagination, Navigation],
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }
}
