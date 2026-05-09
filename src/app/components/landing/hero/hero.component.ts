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
  /** Same deployment pattern as `/bks-logo.png`: files live under `public/` and are copied to site root by the build. */
  images = [
    { src: '/bks1.png', alt: 'Green pea seed production and agronomy at Bundelkhand Seeds facilities' },
    { src: '/bks2.png', alt: 'Pea crop stand in Bundelkhand growing region fields' },
    { src: '/bks3.png', alt: 'Quality vegetable seed grading and conditioning line' },
    { src: '/bks4.png', alt: 'Farmers inspecting pea pod development during Rabi season' },
    { src: '/bks5.png', alt: 'Seed processing equipment for vegetable pea genetics' },
    { src: '/bks6.png', alt: 'Harvested pea plants ready for threshing operations' },
    { src: '/bks7.png', alt: 'Field trial plots comparing pea varieties' },
    { src: '/bks8.png', alt: 'Packaged pea seed sacks prepared for distributor dispatch' },
    { src: '/bks9.png', alt: 'Irrigated pea cultivation in Uttar Pradesh farmland' },
    { src: '/bks10.png', alt: 'Close-up of healthy green pea pods in the field' },
    { src: '/bks11.png', alt: 'Bundelkhand Seeds team with growers at demonstration plot' },
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
