import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appblack]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#181617'
  }

}
