import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/authservice.service';
import { User } from '../user';


export const TOKEN_NAME = "token";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user: User=new User();
  dataa: any;
  username: any;
  disp_msg: string;
  constructor( private router: Router,private auth:AuthserviceService) {
    this.user=new User();
   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.user);
    this.login();
  }
  login() {
    this.auth.login(this.user).subscribe(
      (data: any) => {
        console.log(data);
        this.router.navigate(['/home']);
         },
      (error: any) =>console.error(error)
    );
    
      
   
  }
  
}
