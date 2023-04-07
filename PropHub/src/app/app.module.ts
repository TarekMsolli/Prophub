import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './landing/landing.component';
import { GameShopComponent } from './game-shop/game-shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { GameAssetShopComponent } from './game-asset-shop/game-asset-shop.component';
import { GameCardComponent } from './game-card/game-card.component';
import { GamePreviewComponent } from './game-preview/game-preview.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TrendingGameCardComponent } from './trending-game-card/trending-game-card.component';
import { MissingComponent } from './missing/missing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    GameShopComponent,
    NavbarComponent,
    HeaderComponent,
    GameAssetShopComponent,
    GameCardComponent,
    GamePreviewComponent,
    LoginComponent,
    RegisterComponent,
    TrendingGameCardComponent,
    MissingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
