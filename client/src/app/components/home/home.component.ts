import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ComponentContextService } from 'src/app/services/component-context.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {

  constructor(context: ComponentContextService) {
    super(context);
  }

  ngOnInit() {
  }

}
