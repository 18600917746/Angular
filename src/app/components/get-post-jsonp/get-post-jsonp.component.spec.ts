import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPostJsonpComponent } from './get-post-jsonp.component';

describe('GetPostJsonpComponent', () => {
  let component: GetPostJsonpComponent;
  let fixture: ComponentFixture<GetPostJsonpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPostJsonpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPostJsonpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
