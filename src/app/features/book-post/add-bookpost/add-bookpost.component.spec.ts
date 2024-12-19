import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookpostComponent } from './add-bookpost.component';

describe('AddBookpostComponent', () => {
  let component: AddBookpostComponent;
  let fixture: ComponentFixture<AddBookpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBookpostComponent]
    });
    fixture = TestBed.createComponent(AddBookpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
