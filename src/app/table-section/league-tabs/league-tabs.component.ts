import { Component, OnInit } from '@angular/core';
import { LeagueTablesHttpService } from '../league-tables-http.service';


@Component({
  selector: 'app-league-tabs',
  templateUrl: './league-tabs.component.html',
  styleUrls: ['./league-tabs.component.scss']
})
export class LeagueTabsComponent implements OnInit {

  constructor(public http: LeagueTablesHttpService) { }

  ngOnInit() {
  }

}
