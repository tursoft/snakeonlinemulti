import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Multiplayer Snake Game';
  public isToolbarVisible = false;
  public serverMonitorUrl = '';

  constructor(public router: Router) {
    this.serverMonitorUrl = environment.serverMonitorUrl;

    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const navigationEnd = e as NavigationEnd;
        this.isToolbarVisible = (navigationEnd.url != 'home');
      }
    });
  }
}
