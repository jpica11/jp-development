import { HomeTileComponent } from './../home-tile/home-tile.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerComponent } from './banner.component';


describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerComponent, HomeTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render banner', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.hero-image'));
  });
});
