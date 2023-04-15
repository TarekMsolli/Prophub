import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChipComponent } from './chip/chip.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { AssetsComponent } from './assets/assets.component';
import { GameCardComponent } from './game-card/game-card.component';
import { GameComponent } from './game/game.component';
import { AssetComponent } from './asset/asset.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { AssetCardComponent } from './asset-card/asset-card.component';
import { CartComponent } from './cart/cart.component';
import { UploadPropComponent } from './upload-prop/upload-prop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ChipComponent,
    GamesComponent,
    HomeComponent,
    AssetsComponent,
    GameCardComponent,
    GameComponent,
    AssetComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    MobileNavComponent,
    AssetCardComponent,
    CartComponent,
    UploadPropComponent
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
