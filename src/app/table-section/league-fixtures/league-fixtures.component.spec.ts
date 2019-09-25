import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueFixturesComponent } from './league-fixtures.component';

describe('LeagueFixturesComponent', () => {
  let component: LeagueFixturesComponent;
  let fixture: ComponentFixture<LeagueFixturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueFixturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueFixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
