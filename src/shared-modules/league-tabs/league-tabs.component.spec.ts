import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueTabsComponent } from './league-tabs.component';

describe('LeagueTabsComponent', () => {
  let component: LeagueTabsComponent;
  let fixture: ComponentFixture<LeagueTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
