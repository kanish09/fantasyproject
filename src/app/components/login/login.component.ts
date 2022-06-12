import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg = '';
  form = new FormGroup({
    phone: new FormControl('', [Validators.required, Validators.min(1000000000)]),
    password: new FormControl('', [Validators.required])
  })
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  get phone() {
    return this.form.get('phone');
  }
  get password() {
    return this.form.get('password');
  }
  login(value: any) {
    if(this.router.url=='/admin'){
      let admin=value.value;
      if(admin.phone==8794642279){
        if(admin.password=="kanish09"){
          localStorage.setItem('adminToken','kanish09')
          window.location.reload();
        }
      }
    }
    // let user = value.value;
    // this.userService.login(user).subscribe((response: any) => {
    //   if (response.msg) {
    //     this.msg = response.msg;
    //     this.form.setErrors({ invalid: true });
    //   }
    //   else {
    //     Cookie.set('token', response.token);
    //     window.location.reload();
    //   }
    // });
  }
}
