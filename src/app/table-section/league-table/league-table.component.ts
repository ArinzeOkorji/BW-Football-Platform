import { Component, OnInit } from '@angular/core';
import { LeagueTablesHttpService } from '../league-tables-http.service';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent implements OnInit {
  table: Array<object> = [];
  pageNumber: Number = 1;
  count: Number = 5;

  constructor(private http: LeagueTablesHttpService) { }

  ngOnInit() {
    /* Fetch league table */
    this.http.requestleagueTable()
    .subscribe(
      res => {
        console.log(res.standings[0].table);
         console.log(res);
        this.table = res.standings[0].table;
      },
      err => console.log(err)
    );
  }

}
