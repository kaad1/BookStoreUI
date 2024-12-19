import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookpostComponent } from './edit-bookpost.component';

describe('EditBookpostComponent', () => {
  let component: EditBookpostComponent;
  let fixture: ComponentFixture<EditBookpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBookpostComponent]
    });
    fixture = TestBed.createComponent(EditBookpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
