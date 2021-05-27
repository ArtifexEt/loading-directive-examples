import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { LoadingMode, Position } from 'src/app/shared/types';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input()
  public isLoading!: boolean

  @Input()
  public mode!: LoadingMode;

  @Input()
  public color: ThemePalette;

  @Input()
  public diameter: number = 50;
  
  @Input()
  public position: Position = 'center';
  
  constructor() { }

  ngOnInit(): void {
  }

}
