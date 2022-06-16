import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContestService {
  url = "http://localhost:8080/contest/"
  constructor(private http: HttpClient) { }
  addContest(data: any) {
    return this.http.post(this.url + 'addcontest', data);
  }
  getContest() {
    return this.http.get(this.url + 'allcontest');
  }
}
