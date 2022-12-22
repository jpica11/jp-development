import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioPageComponent } from './bio-page.component';

describe('BioPageComponent', () => {
  let component: BioPageComponent;
  let fixture: ComponentFixture<BioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render bio', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.bio-image'));
    expect(compiled.querySelector('.bio-text'));
  });
});
