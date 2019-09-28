import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeagueTablesHttpService } from '../league-tables-http.service';

@Component({
  selector: 'app-selected-league',
  templateUrl: './selected-league.component.html',
  styleUrls: ['./selected-league.component.scss']
})
export class SelectedLeagueComponent implements OnInit {
  leagueName: string;

  constructor(private activatedRoute: ActivatedRoute, public http: LeagueTablesHttpService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      /* Sets league Id  to route parameter */
      this.http.leagueId = param['selected-league'];

      /* Makes request to fetch League */
      this.http.requestLeagueName();

      /* Navigates to ensure the league-table child component is activated on selected league change */
      this.router.navigate([`/table/${this.http.leagueId}/table`]);
    });


  }

}
