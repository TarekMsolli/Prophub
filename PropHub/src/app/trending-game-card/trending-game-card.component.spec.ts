import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingGameCardComponent } from './trending-game-card.component';

describe('TrendingGameCardComponent', () => {
  let component: TrendingGameCardComponent;
  let fixture: ComponentFixture<TrendingGameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingGameCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingGameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
