import { Component, OnInit } from '@angular/core';
import { ComponentContextService } from '../base/component-context.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent extends BaseComponent  implements OnInit {

  constructor(context: ComponentContextService) {
    super(context);
  }

  ngOnInit() {
  }

}
