import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImagesComponent } from './main-images.component';

describe('MainImagesComponent', () => {
  let component: MainImagesComponent;
  let fixture: ComponentFixture<MainImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
