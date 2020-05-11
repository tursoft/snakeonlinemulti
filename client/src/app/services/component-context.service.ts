import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UtilitiesService } from 'src/app/services/utilities.service';
import { GameServerService } from './game-server.service';

@Injectable({
  providedIn: 'root'
})
export class ComponentContextService {

  constructor(
    public router: Router,
    public snackBar: MatSnackBar,
    public utilities: UtilitiesService,
    public gameServerService: GameServerService) {

    }
}
