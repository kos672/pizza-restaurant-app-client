import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appProductAdded]'
})
export class ProductAddedDirective {

  initialBgColor;

  constructor(private element: ElementRef) {
  }

  @HostListener('click') onMouseEnter() {
    this.initialBgColor = this.element.nativeElement.style.backgroundColor;
    this.element.nativeElement.style.backgroundColor = '#5bc0de';
    setTimeout(() => {
      this.element.nativeElement.style.backgroundColor = this.initialBgColor;
    }, 200);
  }

}
