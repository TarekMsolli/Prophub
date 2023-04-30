import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { AssetsComponent } from './assets/assets.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { CartComponent } from './cart/cart.component';
import { RefreshcartComponent } from './refreshcart/refreshcart.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadPropComponent } from './upload-prop/upload-prop.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'games', component: GamesComponent },
  { path: 'sign-in', component: SignInComponent},
  { path: 'home', component: HomeComponent},
  { path: 'assets', component: AssetsComponent},
  { path: 'games/:id', component: GameDetailsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'refreshcart', component: RefreshcartComponent},
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'upload-prop', component: UploadPropComponent},
  { path: 'sign-up', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
