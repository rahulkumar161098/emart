import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderHeaderNavComponent } from './vender-header-nav.component';

describe('VenderHeaderNavComponent', () => {
  let component: VenderHeaderNavComponent;
  let fixture: ComponentFixture<VenderHeaderNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderHeaderNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenderHeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
