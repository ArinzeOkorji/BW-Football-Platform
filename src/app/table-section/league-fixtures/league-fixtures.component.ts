import { Component, OnInit } from '@angular/core';
import { LeagueTablesHttpService } from '../league-tables-http.service';

@Component({
  selector: 'app-league-fixtures',
  templateUrl: './league-fixtures.component.html',
  styleUrls: ['./league-fixtures.component.scss']
})
export class LeagueFixturesComponent implements OnInit {
  fixtures: Array<object> = [];
  pageNumber: Number = 1;
  count: Number = 5;

  constructor(private http: LeagueTablesHttpService) { }

  ngOnInit() {
  /* Fetch league fixtures */
  this.http.requestleagueFixtures()
    .subscribe(
      res => {
        console.log(res.matches);
         console.log(res);
        this.fixtures = res.matches;
      },
      err => console.log(err)
    );
  }

}
