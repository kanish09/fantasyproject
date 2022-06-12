import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.css']
})
export class AddTournamentComponent implements OnInit {
  msg = '';
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required])
  })
  constructor(private tournamentService: TournamentService) { }

  ngOnInit(): void {
  }
  get name() {
    return this.form.get('name');
  }
  get startDate() {
    return this.form.get('startDate');
  }
  get endDate() {
    return this.form.get('endDate');
  }
  get type() {
    return this.form.get('type');
  }
  submit(value: any) {
    this.tournamentService.addTournament(value.value).subscribe();
  }
}
