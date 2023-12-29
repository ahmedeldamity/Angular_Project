import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges{

  // if you take this variable from html
  // you must add property binding Input() before it
  @Input() mouseOverColor:string = "blue";
  @Input() mouseOutColor:string = "blue";
  @Input() defaultColor:string = "blue";

  constructor(public elementRef: ElementRef)
  {

  }
  ngOnChanges(): void
  {
    this.elementRef.nativeElement.style.border=`5px solid ${this.defaultColor}`;
  }

  @HostListener('mouseover')
  onMouseOver()
  {
    this.elementRef.nativeElement.style.border=`5px solid ${this.mouseOverColor}`;
  }

  @HostListener('mouseout')
  onMouseOut()
  {
    this.elementRef.nativeElement.style.border=`5px solid ${this.mouseOutColor}`;
  }
}
