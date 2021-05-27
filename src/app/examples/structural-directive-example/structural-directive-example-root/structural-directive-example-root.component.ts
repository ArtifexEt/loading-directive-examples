import { Component, OnInit } from '@angular/core';
import { ControlsService } from 'src/app/shared/services/controls.service';

@Component({
  selector: 'app-structural-directive-example-root',
  templateUrl: './structural-directive-example-root.component.html',
  styleUrls: ['./structural-directive-example-root.component.scss']
})
export class StructuralDirectiveExampleRootComponent implements OnInit {

  constructor(public service: ControlsService) { }

  ngOnInit(): void {
  }

  playgroundSample = () => `<div
    *appLoadingStruturalDirective="${this.service.isLoading}; mode: ${this.service.getMode()}; config: { diameter: ${this.service.size}, color: ${this.service.theme}, position: ${this.service.position} }">
    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Ab cumque pariatur excepturi illum ipsum blanditiis deleniti obcaecati.
      Inventore ut distinctio architecto laudantium eveniet, dignissimos vitae,
      dolorem illum sit facere quam.</div>
</div>
`

}
