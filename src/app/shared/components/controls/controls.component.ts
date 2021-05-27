import { ControlsService } from './../../services/controls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  constructor(public service: ControlsService) { }

  ngOnInit(): void {
  }

}
