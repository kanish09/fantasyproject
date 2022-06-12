import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  login() {
    this.modalService.open(LoginComponent);
  }
  signup() {
    this.modalService.open(SignupComponent);
  }
}
