import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {

  // if you take this variable from html
  // you must add property binding Input() before it
  @Input() mouseOverColor:string = "blue";
  @Input() mouseOutColor:string = "blue";

  constructor(public elementRef: ElementRef)
  {
    elementRef.nativeElement.style.border="5px solid black"
  }

  @HostListener('mouseover')
  onMouseOver()
  {
    this.elementRef.nativeElement.style.border=`5px solid ${this.mouseOverColor}`
  }

  @HostListener('mouseout')
  onMouseOut()
  {
    this.elementRef.nativeElement.style.border=`5px solid ${this.mouseOutColor}`
  }
}
