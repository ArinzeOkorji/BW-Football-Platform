import { TestBed } from '@angular/core/testing';

import { LeagueTablesHttpService } from './league-tables-http.service';

describe('LeagueTablesHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeagueTablesHttpService = TestBed.get(LeagueTablesHttpService);
    expect(service).toBeTruthy();
  });
});
