import { Component, OnInit } from '@angular/core';
import { BusyIndicator } from 'src/app/models/busyIndicator';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';
import { ComponentContextService } from './component-context.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  busyIndicator: BusyIndicator = { isBusy: false, busyText: '' };

  constructor(public context: ComponentContextService) {

  }

  ngOnInit() {
  }

  setBusy(busyText: string) {
    this.busyIndicator.busyText = busyText;
    this.busyIndicator.isBusy = true;
  }

  endBusy() {
    this.busyIndicator.isBusy = false;
  }

  handleError(message: string, source: string, reject: ((reason?: any) => void) = null, durationInSeconds = 10) {
    this.endBusy();

    const config: MatSnackBarConfig = {
      politeness: 'assertive'
    };

    const snackBarRef = this.context.snackBar.open(message, 'OK', config);
    if (reject != null) {
      reject(message);
    }
  }
}
