import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLeagueSelectionComponent} from './table-league-selection.component';

describe('TableLeagueSelectionComponent', () => {
  let component: TableLeagueSelectionComponent;
  let fixture: ComponentFixture<TableLeagueSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLeagueSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLeagueSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
