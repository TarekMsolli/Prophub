import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshcartComponent } from './refreshcart.component';

describe('RefreshcartComponent', () => {
  let component: RefreshcartComponent;
  let fixture: ComponentFixture<RefreshcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshcartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefreshcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
