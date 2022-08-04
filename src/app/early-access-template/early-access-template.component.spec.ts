import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyAccessTemplateComponent } from './early-access-template.component';

describe('EarlyAccessTemplateComponent', () => {
  let component: EarlyAccessTemplateComponent;
  let fixture: ComponentFixture<EarlyAccessTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarlyAccessTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarlyAccessTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
