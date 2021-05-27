import { ComponentFactory, ComponentRef, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Directive, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Position } from 'src/app/shared/types';
import { LoadingTemplateComponent } from '../../components/loading-template/loading-template.component';

@Directive({
  selector: '[appLoadingDirective]'
})
export class LoadingDirective implements OnChanges{
  @HostBinding('style.position')
  stylePosition:string = 'relative';

  @HostBinding('style.height')
  stylenHeight:string = '100%';

  @HostBinding('style.width')
  styleWidth:string = '100%';


  @Input('appLoadingDirective')
  isLoading: boolean = false;

  @Input()
  isOverlay: boolean = true;

  @Input()
  size: number = 70;

  @Input()
  theme: ThemePalette;

  @Input()
  position: Position = 'center';

  loader?: ComponentRef<LoadingTemplateComponent>;
  componentFactory: ComponentFactory<LoadingTemplateComponent>;

  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver, private el: ElementRef,  private renderer: Renderer2) {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(LoadingTemplateComponent);


    console.log('element - ref', el)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isLoading && !this.loader) {
      this.loader = this.viewContainerRef.createComponent(this.componentFactory);
      this.renderer.appendChild(this.el.nativeElement, this.loader.instance.elementRef.nativeElement);
    }

    if(!this.isLoading && this.loader) {
      this.viewContainerRef.clear();
      this.loader = undefined;
    }

    if(this.loader) {
      this.loader.instance.position = this.position;
      this.loader.instance.size = this.size;
      this.loader.instance.theme = this.theme;
    }

    this.nodeHacking();

  }

  private nodeHacking() {
    const childNodes = [...this.el.nativeElement.children];
    childNodes.forEach(childNode => {
      this.renderer.setStyle(childNode, 'position', 'absolute');
      if (childNode != this.loader?.instance.elementRef.nativeElement) {
        if (!this.isOverlay && this.isLoading) {
          this.renderer.setStyle(childNode, 'display', 'none');
        } else {
          this.renderer.setStyle(childNode, 'display', 'initial');
        }
      }

    })
  }

}
