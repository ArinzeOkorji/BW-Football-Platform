import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueTablesHttpService {
leagueId;

  constructor(private http: HttpClient) {

  }

 requestleagueTable(): Observable<any> {
   let headers = new HttpHeaders();
   headers = headers.set('X-Auth-Token', 'cd5381a90c8245689142d87d308ed79a');
    return this.http.get(`http://api.football-data.org/v2/competitions/${this.leagueId}/standings?standingType=TOTAL`, { headers });

 }

 requestleagueFixtures(): Observable<any> {
   let headers = new HttpHeaders();
   headers = headers.set('X-Auth-Token', 'cd5381a90c8245689142d87d308ed79a');
    return this.http.get(`http://api.football-data.org/v2/competitions/${this.leagueId}/matches?status=SCHEDULED`, { headers });

 }
}
