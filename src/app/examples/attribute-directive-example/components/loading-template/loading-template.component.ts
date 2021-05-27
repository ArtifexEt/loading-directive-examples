import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Position } from 'src/app/shared/types';

@Component({
  selector: 'app-loading-template',
  templateUrl: './loading-template.component.html',
  styleUrls: ['./loading-template.component.scss']
})
export class LoadingTemplateComponent implements OnInit {
  size: number = 70;
  theme!: ThemePalette;
  position: Position = 'center';

  constructor(public elementRef: ElementRef) { } // hack to expose elementRef

  ngOnInit(): void {
  }

}
