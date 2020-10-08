import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTemplate } from './general.template';

describe('GeneralTemplate', () => {
  let component: GeneralTemplate;
  let fixture: ComponentFixture<GeneralTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralTemplate ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
