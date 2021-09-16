import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsListCardComponent } from './sports-list-card.component';

describe('SportsListCardComponent', () => {
  let component: SportsListCardComponent;
  let fixture: ComponentFixture<SportsListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
