import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/authservice.service';
import { AuthService } from '../shared/auth.service';
import { User } from '../user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User=new User();
  router: any;
  constructor(private auth:AuthserviceService ) {
      
     }


    disp_msg:String;

  ngOnInit(): void {
  }

onSubmit(){
  console.log(this.user);
  this.saveUser();

  console.log(this.user);
  alert("User Signup successful");
  this.router.navigate(['login']);
  
}
saveUser(){
  this.auth.createUser(this.user).subscribe(
    (data: any) => {
      console.log(data);
    },
    (error: any) => console.error(error)
  );
}
}