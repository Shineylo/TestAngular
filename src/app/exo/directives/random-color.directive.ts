import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective {

  constructor(private _element: ElementRef) { 
  }

  @HostListener('mouseover')
  onMouseOver(){
    let r:Number;
    let g:Number;
    let b:Number;
    let min = 0, max=255;
    r = Math.floor( Math.random()*(max-min+1) + min );
    g = Math.floor( Math.random()*(max-min+1) + min );
    b = Math.floor( Math.random()*(max-min+1) + min );
    this._element.nativeElement.style.color = 'rgb('+r+','+g+','+b+')';
  }

}
