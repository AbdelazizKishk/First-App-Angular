import { Component } from '@angular/core';

interface Isrc {
  image: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  imgSrcs: Isrc[] = [
    { image: '/imgs/poert1.png' },
    { image: '/imgs/port2.png' },
    { image: '/imgs/port3.png' },
    { image: '/imgs/port2.png' },
    { image: '/imgs/port3.png' },
    { image: '/imgs/poert1.png' },
  ];

  isModalOpen = false;
  currentIndex: number = 0;

  get selectedImage(): Isrc {
    return this.imgSrcs[this.currentIndex];
  }

  openModal(index: number): void {
    this.currentIndex = index;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
