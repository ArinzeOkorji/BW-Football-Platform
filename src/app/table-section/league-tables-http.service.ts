import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeagueTablesHttpService {
leagueId: number;
leagueName: string;

  constructor(private http: HttpClient) {

  }

  requestLeagueName() {
     this.http.get(`https://api.football-data.org/v2/competitions/${this.leagueId}`)
    .subscribe(
      (res) => {
        /* Set League name to the returned json */
        this.leagueName = res['name'];
      },
      (err) => {
        console.log(err);
      }
    );
  }

 requestleagueTable(): Observable<any> {
    return this.http.get(`https://api.football-data.org/v2/competitions/${this.leagueId}/standings?standingType=TOTAL`);

 }

 requestleagueFixtures(): Observable<any> {
    return this.http.get(`https://api.football-data.org/v2/competitions/${this.leagueId}/matches?status=SCHEDULED`)
    .pipe(
      tap(res => {
        res['matches'].forEach(match => {
          match['gameDate'] = match['utcDate'].split('T')[0];
          match['gameTime'] = match['utcDate'].split('T')[1].split('Z')[0];
        });
      })
    );

 }
}
