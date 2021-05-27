import { ComponentFactory, ComponentRef, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Directive, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { LoadingMode, Position } from 'src/app/shared/types';
import { ComponentConfig, LoadingTemplateComponent } from '../../components/loading-template/loading-template.component';

@Directive({
  selector: '[appLoadingStruturalDirective]'
})
export class LoadingDirective implements OnChanges {
  private isLoading: boolean = false;
  private mode: LoadingMode = 'replace';
  private customTemplate!: TemplateRef<any>;
  private templateConfig?: ComponentConfig;

  @Input()
  set appLoadingStruturalDirective(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  @Input()
  set appLoadingStruturalDirectiveMode(mode: LoadingMode) {
    this.mode = mode;
  }

  @Input()
  set appLoadingStruturalDirectiveTemplate(customTemplate: TemplateRef<any>) {
    this.customTemplate = customTemplate;
  }

  @Input()
  set appLoadingStruturalDirectiveConfig(value: ComponentConfig) {
    this.templateConfig = value;
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<void>,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnChanges(): void {
    this.clean();

    if (this.isLoading) {
      if (this.customTemplate) {
        this.renderLoadingTemplate();
      } else {
        this.renderDefaultLoadingComponent();
      }
    }

    if (!this.isLoading) {
      this.renderContentState();
    }
  }

  private renderDefaultLoadingComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(LoadingTemplateComponent);
    const component = this.viewContainerRef.createComponent(componentFactory);
    component.instance.configure(this.templateConfig);
    if (this.isOverlay()) {
      component.instance.setChildren(this.templateRef);
    }
  }

  private renderContentState(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

  private renderLoadingTemplate(): void {
    this.viewContainerRef.createEmbeddedView(this.customTemplate);
  }

  private clean(): void {
    this.viewContainerRef.clear();
    if (this.viewContainerRef.length) {
      this.viewContainerRef.remove();
    }
  }

  private isOverlay(): boolean {
    return this.mode === 'overlay';
  }
}
