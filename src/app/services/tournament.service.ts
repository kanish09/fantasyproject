import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  url = "http://localhost:8080/tournament/"
  constructor(private http: HttpClient) { }
  addTournament(data: any) {
    return this.http.post(this.url + 'addtournament', data)
  }
  getTournament(){
    return this.http.get(this.url+'alltournament');
  }
}
