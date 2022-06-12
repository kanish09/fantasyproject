import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagetournamentComponent } from './homepagetournament.component';

describe('HomepagetournamentComponent', () => {
  let component: HomepagetournamentComponent;
  let fixture: ComponentFixture<HomepagetournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepagetournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagetournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
