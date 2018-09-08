import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCarComponent } from './book-car.component';

describe('BookCarComponent', () => {
  let component: BookCarComponent;
  let fixture: ComponentFixture<BookCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
