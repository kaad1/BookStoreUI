import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCitatsComponent } from './books-citats.component';

describe('BooksCitatsComponent', () => {
  let component: BooksCitatsComponent;
  let fixture: ComponentFixture<BooksCitatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksCitatsComponent]
    });
    fixture = TestBed.createComponent(BooksCitatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
