import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TournamentService } from 'src/app/services/tournament.service';
import { AddTournamentComponent } from './add-tournament/add-tournament.component';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {
tournaments:any
  constructor(private modalService: NgbModal,private tournamentService:TournamentService) { }

  ngOnInit(): void {
    this.tournamentService.getTournament().subscribe(response=>{
      this.tournaments=response;
    })
  }
  addtournament() {
    this.modalService.open(AddTournamentComponent);
  }
}
