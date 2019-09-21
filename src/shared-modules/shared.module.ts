
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { LeagueTabsComponent } from './league-tabs/league-tabs.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    LeagueTabsComponent
  ],
  providers: [],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent
  ],
})

export class SharedModule {}
