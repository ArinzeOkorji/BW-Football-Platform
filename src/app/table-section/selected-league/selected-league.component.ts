import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueTablesHttpService } from '../league-tables-http.service';

@Component({
  selector: 'app-selected-league',
  templateUrl: './selected-league.component.html',
  styleUrls: ['./selected-league.component.scss']
})
export class SelectedLeagueComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private http: LeagueTablesHttpService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.http.leagueId = param['selected-league'];
    });
  }

}
