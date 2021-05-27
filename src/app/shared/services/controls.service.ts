import { LoadingMode, Position } from 'src/app/shared/types';
import { Injectable } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {
  isLoading: boolean = true;
  isOverlay: boolean = true;
  size: number = 70;
  theme: ThemePalette;
  position: Position = 'center';

  constructor() { }

  getMode = (): LoadingMode => this.isOverlay? 'overlay': 'replace';

  
}
