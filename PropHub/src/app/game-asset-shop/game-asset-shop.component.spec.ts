import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAssetShopComponent } from './game-asset-shop.component';

describe('GameAssetShopComponent', () => {
  let component: GameAssetShopComponent;
  let fixture: ComponentFixture<GameAssetShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameAssetShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameAssetShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
