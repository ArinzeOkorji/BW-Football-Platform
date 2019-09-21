
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueTabsComponent } from './league-tabs/league-tabs.component';
import { RouterModule } from '@angular/router';
import { tableRouter } from './table.routing';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    LeagueTabsComponent,
    TableComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    RouterModule.forChild(tableRouter)
  ],
  exports: [
    TableComponent
  ],
})

export class TableModule {}
