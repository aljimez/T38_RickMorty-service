import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacByIdComponent } from './charac-by-id.component';

describe('CharacByIdComponent', () => {
  let component: CharacByIdComponent;
  let fixture: ComponentFixture<CharacByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacByIdComponent]
    });
    fixture = TestBed.createComponent(CharacByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
