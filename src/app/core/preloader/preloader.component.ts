import { Renderer, ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {

  el1: HTMLElement
  constructor() {
  }

  ngOnInit() {
  }
  close() {
    this.el1 = document.getElementsByTagName('app-preloader')[0] as HTMLElement;
    this.el1.classList.add('closed');
  }
  open() {
    this.el1 = document.getElementsByTagName('app-preloader')[0] as HTMLElement;
    this.el1.classList.remove('closed')
  }

}