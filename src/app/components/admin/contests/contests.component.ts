import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContestService } from 'src/app/services/contest.service';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.css']
})
export class ContestsComponent implements OnInit {
  tournaments:any
  constructor(private modalService: NgbModal,private contestService:ContestService) { }

  ngOnInit(): void {
    // this.contestService.addContest().subscribe(response=>{
    //   this.tournaments=response;
    // })
  }
  addtournament() {
    // this.modalService.open(AddTournamentComponent);
  }
}
