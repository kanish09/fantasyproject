import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContestService } from 'src/app/services/contest.service';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-addcontest',
  templateUrl: './addcontest.component.html',
  styleUrls: ['./addcontest.component.css']
})
export class AddcontestComponent implements OnInit {
  msg = '';
  tournaments: any;
  form = new FormGroup({
    tournament: new FormControl('', [Validators.required]),
    prizepool: new FormControl('', [Validators.required]),
    totalPlayer: new FormControl('', [Validators.required]),
    winner: new FormControl('', [Validators.required])
  })
  constructor(private contentService: ContestService, private tournamentService: TournamentService) { }

  ngOnInit(): void {
    this.tournamentService.getTournament().subscribe(response => {
      this.tournaments = response;
    })
  }
  get tournament() {
    return this.form.get('tournament');
  }
  get prizepool() {
    return this.form.get('prizepool');
  }
  get totalPlayer() {
    return this.form.get('totalPlayer');
  }
  get winner() {
    return this.form.get('winner');
  }
  submit(value: any) {
    this.contentService.addContest(value.value).subscribe();
  }
}
