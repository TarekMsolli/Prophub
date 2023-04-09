import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropPreviewComponent } from './prop-preview.component';

describe('PropPreviewComponent', () => {
  let component: PropPreviewComponent;
  let fixture: ComponentFixture<PropPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
