import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { AssetsComponent } from './assets/assets.component';
import { GameCardComponent } from './game-card/game-card.component';
import { AssetCardComponent } from './asset-card/asset-card.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { RefreshcartComponent } from './refreshcart/refreshcart.component';
import { UploadPropComponent } from './upload-prop/upload-prop.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';




@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    GamesComponent,
    AssetsComponent,
    GameCardComponent,
    AssetCardComponent,
    GameDetailsComponent,
    CartComponent,
    ProfileComponent,
    RefreshcartComponent,
    UploadPropComponent,
    MobileNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
