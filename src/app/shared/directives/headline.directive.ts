import { Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHeadline]',
})
export class HeadlineDirective {
  private _fontWeight = 'normal';

  @Input()
  get fontWeight(): string {
    return this._fontWeight;
  }
  set fontWeight(newValue: string) {
    this._fontWeight = newValue;
    this.render.setStyle(
      this.elementRef.nativeElement,
      'font-weight',
      this.fontWeight
    );
  }
  constructor(private elementRef: ElementRef, private render: Renderer2) {
    this.render.setStyle(this.elementRef.nativeElement, 'font-size', '20px');
  }
}
