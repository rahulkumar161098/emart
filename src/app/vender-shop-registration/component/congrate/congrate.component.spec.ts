import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongrateComponent } from './congrate.component';

describe('CongrateComponent', () => {
  let component: CongrateComponent;
  let fixture: ComponentFixture<CongrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongrateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
