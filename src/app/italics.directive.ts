import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appItalics]'
})
export class ItalicsDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.backgroundColor = 'yellow'
    el.nativeElement.style.fontStyle = 'italic'
    el.nativeElement.style.textDecorationLine = 'underline';
    el.nativeElement.style.textDecorationStyle = 'wavy';
  }

}


