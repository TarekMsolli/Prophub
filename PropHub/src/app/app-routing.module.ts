import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { GameShopComponent } from './game-shop/game-shop.component';
import { GameAssetShopComponent } from './game-asset-shop/game-asset-shop.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'game-shop', component: GameShopComponent },
  { path: 'game-asset-shop', component: GameAssetShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
