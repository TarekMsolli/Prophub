import { PropPreviewComponent } from './prop-preview/prop-preview.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { GameShopComponent } from './game-shop/game-shop.component';
import { GameAssetShopComponent } from './game-asset-shop/game-asset-shop.component';
import { GamePreviewComponent } from './game-preview/game-preview.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MissingComponent } from './missing/missing.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'game-shop', component: GameShopComponent },
  { path: 'game-asset-shop', component: GameAssetShopComponent },
  { path: 'game-preview', component: GamePreviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'missing', component: MissingComponent },
  { path: 'prop-preview', component: PropPreviewComponent },
  { path: 'social', component: SocialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
