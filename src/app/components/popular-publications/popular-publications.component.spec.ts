import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPublicationsComponent } from './popular-publications.component';

describe('PopularPublicationsComponent', () => {
  let component: PopularPublicationsComponent;
  let fixture: ComponentFixture<PopularPublicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularPublicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
