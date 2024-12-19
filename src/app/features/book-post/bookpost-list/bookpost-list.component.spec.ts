import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookpostListComponent } from './bookpost-list.component';

describe('BookpostListComponent', () => {
  let component: BookpostListComponent;
  let fixture: ComponentFixture<BookpostListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookpostListComponent]
    });
    fixture = TestBed.createComponent(BookpostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
