import { Component, OnInit } from '@angular/core';
import { LeagueTablesHttpService } from '../league-tables-http.service';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent implements OnInit {

  constructor(private http: LeagueTablesHttpService) { }

  ngOnInit() {
    this.http.requestleagueFixtures()
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
