import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private modalService:NgbModal) {
    if(!localStorage.getItem('adminToken')){
      this.modalService.open(LoginComponent);
    }
   }
  ngOnInit(): void {
  }

}
