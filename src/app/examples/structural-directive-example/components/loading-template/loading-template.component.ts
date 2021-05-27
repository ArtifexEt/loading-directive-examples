import { ElementRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Position } from 'src/app/shared/types';

export interface ComponentConfig {
  color?: ThemePalette;
  diameter?: number | undefined;
  position?: Position;
}

@Component({
  selector: 'app-loading-structural-template',
  templateUrl: './loading-template.component.html',
  styleUrls: ['./loading-template.component.scss']
})
export class LoadingTemplateComponent {
  public color: ThemePalette;
  public diameter: number = 50;
  public position: Position = 'center';

  @ViewChild('content', {read: ViewContainerRef})
  public content!:  ViewContainerRef ;
  template!: TemplateRef<void>;

  constructor() { }

  setChildren(template: TemplateRef<void>) {
    this.template = template;
    setTimeout(()=> {
      this.content.clear();
      // hack - we need to figureout when to change content
      this.content.createEmbeddedView(this.template);
    }, 1000)
  }

  configure(config?: ComponentConfig) {
    if(config?.color) {
      this.color = config.color;
    }

    if(config?.diameter) {
      this.diameter = config.diameter;
    }

    if(config?.position) {
      this.position = config.position;
    }
  }

}
