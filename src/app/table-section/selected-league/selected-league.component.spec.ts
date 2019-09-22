import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedLeagueComponent } from './selected-league.component';

describe('SelectedLeagueComponent', () => {
  let component: SelectedLeagueComponent;
  let fixture: ComponentFixture<SelectedLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
