import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowrepoComponent } from './showrepo.component';

describe('ShowrepoComponent', () => {
  let component: ShowrepoComponent;
  let fixture: ComponentFixture<ShowrepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowrepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowrepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
