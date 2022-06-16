import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ContestService } from 'src/app/services/contest.service';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  tournaments: any;
  contests: any;
  constructor(private tournamentService: TournamentService, private contestService: ContestService) { }
  contestOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };
  ngOnInit(): void {
    this.tournamentService.getTournament().subscribe(response => {
      this.tournaments = response;
    })
    this.contestService.getContest().subscribe(response => {
      this.contests = response;
    })
  }

}
