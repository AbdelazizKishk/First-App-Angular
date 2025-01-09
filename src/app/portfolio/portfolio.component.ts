import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  images: string[] = [
    '/imgs/poert1.png',
    '/imgs/port2.png',
    '/imgs/port3.png',
    '/imgs/port2.png',
    '/imgs/port3.png',
    '/imgs/poert1.png',
  ];

  imgSrc: string = '';
  imgIndex: number = 0;
  status: boolean = true;

  showContainer(src: string, index: number): void {
    this.imgSrc = src;
    this.imgIndex = this.imgIndex;
    this.status = false;
  }

  closeSlied(eInfo: MouseEvent): void {
    eInfo.stopPropagation();
    this.status = true;
  }

  imgLightBox(e: Event): void {
    e.stopPropagation();
  }
}
