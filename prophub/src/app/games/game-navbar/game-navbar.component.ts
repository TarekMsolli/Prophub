import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-navbar',
  templateUrl: './game-navbar.component.html',
  styleUrls: ['./game-navbar.component.scss']
})
export class GameNavbarComponent{


  enteredSearchValue = '';

  @Output() searchTextChanged = new EventEmitter();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
    console.log(this.enteredSearchValue);
  }

}
