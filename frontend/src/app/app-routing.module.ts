import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayGameComponent } from './components/play-game/play-game.component';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { ListGamesComponent } from './components/list-games/list-games.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'play/:gameId', component: PlayGameComponent, data: { title: 'Play', template: 'empty' }},
  { path: 'create', component: CreateGameComponent, data: { title: 'Create', template: 'empty' }},
  { path: 'join', component: ListGamesComponent, data: { title: 'Join', template: 'empty' }},
  { path: 'error', component: ErrorPageComponent, data: { title: 'Error', template: 'empty' }},

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
