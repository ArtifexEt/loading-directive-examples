import { Component, OnInit } from '@angular/core';
import { ControlsService } from 'src/app/shared/services/controls.service';

@Component({
  selector: 'app-component-example-root',
  templateUrl: './component-example-root.component.html',
  styleUrls: ['./component-example-root.component.scss']
})
export class ComponentExampleRootComponent implements OnInit {
  constructor(public service: ControlsService) { }

  ngOnInit(): void {
  }

  playgroundSample = () => `<app-loading [isLoading]="${this.service.isLoading}" [mode]="${this.service.getMode()}" [position]="${this.service.position}" [diameter]="${this.service.size}" [color]="${this.service.theme}">
  <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Ab cumque pariatur excepturi illum ipsum blanditiis deleniti obcaecati.
    Inventore ut distinctio architecto laudantium eveniet, dignissimos vitae,
    dolorem illum sit facere quam.</div>
</app-loading>
`
}
