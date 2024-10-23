import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightFormComponent } from './copyright-form.component';

describe('CopyrightFormComponent', () => {
  let component: CopyrightFormComponent;
  let fixture: ComponentFixture<CopyrightFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyrightFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyrightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
