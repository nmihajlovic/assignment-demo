import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search component has form', () => {
    const form = fixture.debugElement.query(By.css('form'));
    expect(form).not.toBe(null);
  });

  it('search component has input custom input element', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mol-input')).not.toBe(null);
  });

  it('search component has 2 radio button elements', () => {
    const radioButtons = fixture.debugElement.queryAll(By.css('mol-radio-button')).length;
    expect(radioButtons).toEqual(2);
  });
});
