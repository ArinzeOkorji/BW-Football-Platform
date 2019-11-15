import { Component, OnInit } from '@angular/core';
import { LeagueTablesHttpService } from '../league-tables-http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-league-tabs',
  templateUrl: './league-tabs.component.html',
  styleUrls: ['./league-tabs.component.scss']
})
export class LeagueTabsComponent implements OnInit {

  constructor(private router: Router, public http: LeagueTablesHttpService) { }

  ngOnInit() {
    this.router.navigateByUrl('table/2002');
  }

}
