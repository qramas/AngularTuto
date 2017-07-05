import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  //        3.2.1 injection ElementRef et Renderer2 dans le constructor
  constructor(element: ElementRef, renderer: Renderer2) {
    renderer.setStyle(element.nativeElement, 'background', 'yellow')
  }

}
