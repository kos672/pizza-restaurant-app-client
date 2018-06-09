import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  initialState = '';

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.initialState = this.element.nativeElement.innerHTML;
    const afterMouseEnterState = 'Przejdź do koszyka';
    this.element.nativeElement.innerText = afterMouseEnterState;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.innerText = this.initialState;
  }

}
