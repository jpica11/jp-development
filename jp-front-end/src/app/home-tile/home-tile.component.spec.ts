import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTileComponent } from './home-tile.component';

describe('HomeTileComponent', () => {
  let component: HomeTileComponent;
  let fixture: ComponentFixture<HomeTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
