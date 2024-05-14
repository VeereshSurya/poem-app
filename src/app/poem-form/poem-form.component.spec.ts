import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemFormComponent } from './poem-form.component';

describe('PoemFormComponent', () => {
  let component: PoemFormComponent;
  let fixture: ComponentFixture<PoemFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoemFormComponent]
    });
    fixture = TestBed.createComponent(PoemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
