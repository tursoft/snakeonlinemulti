import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { PlayGameComponent } from './components/play-game/play-game.component';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { ListGamesComponent } from './components/list-games/list-games.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NgMaterialComponents } from './app.module.ngmaterial';
import { BaseComponent } from './components/base/base.component';
import { BusyComponent } from './components/busy/busy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayGameComponent,
    CreateGameComponent,
    ListGamesComponent,
    ErrorPageComponent,
    BaseComponent,
    BusyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Angular Material
    NgMaterialComponents,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
