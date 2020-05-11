import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ComponentContextService } from 'src/app/services/component-context.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent extends BaseComponent implements OnInit {

  constructor(context: ComponentContextService) {
    super(context);
  }

  ngOnInit() {
  }

}
