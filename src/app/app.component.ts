import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, CanActivate } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  token : string = "";
  user : any = {};
  public username : string ;
  public password : string ;
  constructor(public httpClient: HttpClient,private router: Router){
    
    //this.ping();
  }
  ping() {
    this.httpClient.post('http://127.0.0.1:3000/auth-jwt/',{username : this.user.username , "password": this.user.password })
    .subscribe(
        (data : any) => { 
                          console.log(data.token); 
                          localStorage.setItem("token",data.token);
                          this.router.navigate(['home']);
          this.customers();  
         },
        (err) => console.log(err)
      );
  }  

  customers(){

      this.httpClient.get("http://127.0.0.1:8000/locations/").subscribe((data)=>{

        console.log(data);

      },(err)=>{console.log(err);});
  }
}
