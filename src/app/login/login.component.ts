import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='ankit'
  password='123'
  errorMessage='Invalid Credentials'
  InvalidLogin=false

    //Router
  //Angular.giveMeRouter
  //Dependency Injection
  //router added here for navigation one page to another page
  //service added here for dependency injection for hardcodedAuthentication service
  constructor(private router:Router,
    private hardcodedAuthenticationService:HardcodedAuthenticationService){}
  ngOnInit(){

  }

handleLogin(){

 // two way binding
 //console.log(this.username,this.password);

// if(this.username==="ankit" && this.password==="123"){
// this.InvalidLogin=false;
// Redirect to welcome page after login
//this.username  we provide path to redirect later

if(this.hardcodedAuthenticationService.autheticate(this.username, this.password)){
this.router.navigate(['welcome',this.username])
this.InvalidLogin=false;

}
else{
  this.InvalidLogin=true;
}
}
}
