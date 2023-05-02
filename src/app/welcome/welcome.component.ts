import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
message = 'Welcome to Welcome folder';
name='';
//public springboot application
//ActivatedRoute and put in constructor function
constructor(private route:ActivatedRoute){

}


//void initialize
ngOnInit(){
console.log(this.message)

//this.name=this.route.snapshot.params['name']
this.name=this.route.snapshot.params['name'];
}
}


