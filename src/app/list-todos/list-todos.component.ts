import { Component, OnInit } from '@angular/core';

//model
export class Todo{
constructor(
  public id:number,
  public description:string,
  public done:boolean,
  public targetDate:Date
){}
}

//Future
// - No Navigation Menu and Footer
// - Formatting - Bootstrap
// - No Security for Menus
// - Hardcoded Logic in the TodoList and Login Components

// - Remaining Functionality - Edit, Delete, Add
// - Spring Boot
// - Spring Security

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  //creating objects
   todos=[
    new Todo(1,'Learn New Technology',false,new Date()),
    new Todo(2,'Doing Btech',false,new Date()),
    new Todo(3,'description:"Learn AngularJS',false,new Date())


    // {id:1, description:"Learn New Technology"},
    // {id:2, description:"Doing Btech"},
    // {id:3, description:"Learn AngularJS"}

   ]


  // todo={
  // id:1,
  // description:'Learning new things'


constuctor(){}

ngOnInit(){

}
}
