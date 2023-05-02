import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  autheticate(username:string, password:string){
    // console.log('before '+this.isUserLoggedIn());

    if(username==="ankit" && password==="123"){
      sessionStorage.setItem('authenicaterUser',username);

      // console.log('after'+this.isUserLoggedIn());
      return true;
    }
    return false;

  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenicaterUser')
    return !(user===null)
  }

logout() {
  sessionStorage.removeItem('authenicaterUser')
}

}
