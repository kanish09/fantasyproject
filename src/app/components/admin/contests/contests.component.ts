import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContestService } from 'src/app/services/contest.service';
import { AddcontestComponent } from './addcontest/addcontest.component';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.css']
})
export class ContestsComponent implements OnInit {
  contests:any
  constructor(private modalService: NgbModal,private contestService:ContestService) { }

  ngOnInit(): void {
    this.contestService.getContest().subscribe(response=>{
      this.contests=response;
    })
  }
  addContest() {
    this.modalService.open(AddcontestComponent);
  }
}
