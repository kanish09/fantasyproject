import { Component, OnInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TournamentService } from 'src/app/services/tournament.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  pictures = ['https://khelgully.com/static/media/Banner.525eb695.png',
'assets/images/carousel_image.jpg'];
tournaments:any
images = ['assets/images/bgmi/bgmi.png', 'assets/images/valorant/valorant.jpg', 'assets/images/comming_soon.jpg', 'assets/images/comming_soon.jpg']
  customOptions: OwlOptions = {
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
            items: 1,
        },
    },
    nav: false,
};
tournamentOptions: OwlOptions = {
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
  constructor(private tournamentService:TournamentService) {
    this.tournamentService.getTournament().subscribe(response=>{
        this.tournaments=response
    })
   }

  ngOnInit(): void {
   
  }
}
