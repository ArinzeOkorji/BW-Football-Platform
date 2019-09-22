
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LeagueTabsComponent } from './league-tabs/league-tabs.component';
import { RouterModule } from '@angular/router';
import { tableSectionRouter } from './table-section.routing';
import { TableLeagueSelectionComponent } from './table-league-selection/table-league-selection.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import { LeagueTablesHttpService } from './league-tables-http.service';
import { SelectedLeagueComponent } from './selected-league/selected-league.component';

@NgModule({
  declarations: [
    LeagueTabsComponent,
    TableLeagueSelectionComponent,
    LeagueTableComponent,
    SelectedLeagueComponent
  ],
  providers: [
    LeagueTablesHttpService
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(tableSectionRouter),
    HttpClientModule
  ],
  exports: [
    TableLeagueSelectionComponent
  ],
})

export class TableSectionModule {}
