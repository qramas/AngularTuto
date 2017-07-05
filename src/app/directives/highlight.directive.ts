import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(element: ElementRef, renderer: Renderer2) {
    renderer.setStyle(element.nativeElement, 'background', 'yellow')
  }

}
