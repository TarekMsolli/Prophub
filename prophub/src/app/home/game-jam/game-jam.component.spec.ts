import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameJamComponent } from './game-jam.component';

describe('GameJamComponent', () => {
  let component: GameJamComponent;
  let fixture: ComponentFixture<GameJamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameJamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameJamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
