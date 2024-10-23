import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimNdScopeComponent } from './aim-nd-scope.component';

describe('AimNdScopeComponent', () => {
  let component: AimNdScopeComponent;
  let fixture: ComponentFixture<AimNdScopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AimNdScopeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AimNdScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
