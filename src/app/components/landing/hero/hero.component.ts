import {Component, OnInit} from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css'; // Import default Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Navigation, Pagination} from 'swiper/modules';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [
    NgForOf
  ],
  templateUrl: './hero.component.html',
  standalone: true,
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  // Define an array of images
  images = [
    {
      src: 'assets/images/bks1.jpeg',
      alt: 'Image 1'
    },
    {
      src: 'assets/images/bks2.jpeg',
      alt: 'Image 2'
    },
    {
      src: 'assets/images/bks3.jpeg',
      alt: 'Image 3'
    },
    {
      src: 'assets/images/bks4.jpeg',
      alt: 'Image 4'
    },
    {
      src: 'assets/images/bks5.jpeg',
      alt: 'Image 5'
    },
    {
      src: 'assets/images/bks6.jpeg',
      alt: 'Image 6'
    },
    {
      src: 'assets/images/bks7.jpeg',
      alt: 'Image 7'
    },
    {
      src: 'assets/images/bks8.jpeg',
      alt: 'Image 8'
    },
    {
      src: 'assets/images/bks9.jpeg',
      alt: 'Image 9'
    },
    {
      src: 'assets/images/bks10.jpeg',
      alt: 'Image 10'
    },
    {
      src: 'assets/images/bks11.jpeg',
      alt: 'Image 11'
    }
  ];

  ngOnInit(): void {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next', // Target next button
        prevEl: '.swiper-button-prev', // Target previous button
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
