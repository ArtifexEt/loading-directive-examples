import { Component, OnInit, ElementRef } from '@angular/core';
import { ControlsService } from 'src/app/shared/services/controls.service';

@Component({
  selector: 'app-attribute-directive-example-root',
  templateUrl: './attribute-directive-example-root.component.html',
  styleUrls: ['./attribute-directive-example-root.component.scss']
})
export class AttributeDirectiveExampleRootComponent implements OnInit {

  constructor(public service: ControlsService) { }

  ngOnInit(): void {
  }

  playgroundSample = () => `<div [appLoadingDirective]="${this.service.isLoading}" [position]="${this.service.position}" [theme]="${this.service.theme}" [size]="${this.service.size}" [isOverlay]="${this.service.isOverlay}">
  <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Ab cumque pariatur excepturi illum ipsum blanditiis deleniti obcaecati.
    Inventore ut distinctio architecto laudantium eveniet, dignissimos vitae,
    dolorem illum sit facere quam.</div>
</div>
`
}
