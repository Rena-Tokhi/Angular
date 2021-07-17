import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CokpitComponent } from './cokpit.component';

describe('CokpitComponent', () => {
  let component: CokpitComponent;
  let fixture: ComponentFixture<CokpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CokpitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CokpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
