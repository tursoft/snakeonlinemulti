import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { GameServerService } from './game-server.service';

@Injectable({
  providedIn: 'root'
})
export class ComponentContextService {

  constructor(
    public snackBar: MatSnackBar,
    public utilities: UtilitiesService,
    public gameServerService: GameServerService) {

    }
}
