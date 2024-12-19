import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCitatComponent } from './add-citat.component';

describe('AddCitatComponent', () => {
  let component: AddCitatComponent;
  let fixture: ComponentFixture<AddCitatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCitatComponent]
    });
    fixture = TestBed.createComponent(AddCitatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
