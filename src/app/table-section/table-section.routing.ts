import {Routes} from '@angular/router';

import { TableLeagueSelectionComponent } from './table-league-selection/table-league-selection.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import { SelectedLeagueComponent } from './selected-league/selected-league.component';
import { LeagueFixturesComponent } from './league-fixtures/league-fixtures.component';


export const tableSectionRouter: Routes = [
  {path: '', component: TableLeagueSelectionComponent, children: [
    {path: ':selected-league', component: SelectedLeagueComponent, children: [
      {path: 'table', component: LeagueTableComponent},
      {path: 'fixture', component: LeagueFixturesComponent}
    ]}
  ]}
];
