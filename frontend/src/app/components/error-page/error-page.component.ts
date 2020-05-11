import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ComponentContextService } from '../base/component-context.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent extends BaseComponent implements OnInit {

  constructor(context: ComponentContextService) {
    super(context);
  }

  ngOnInit() {
  }

}
