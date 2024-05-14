import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemTableComponent } from './poem-table.component';

describe('PoemTableComponent', () => {
  let component: PoemTableComponent;
  let fixture: ComponentFixture<PoemTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoemTableComponent]
    });
    fixture = TestBed.createComponent(PoemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
