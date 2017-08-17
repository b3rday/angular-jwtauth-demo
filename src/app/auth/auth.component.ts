import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, CanActivate } from '@angular/router';
import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
 title = 'app';
  token : string = "";
  user : any = {};
  public username : string ;
  public password : string ;
  constructor(public httpClient: HttpClient,private router: Router , public snackBar: MdSnackBar){
    
    //this.ping();
  }
  login() {
    this.httpClient.post('http://127.0.0.1:3000/login/',{username : this.user.username , "password": this.user.password })
    .subscribe(
        (data : any) => { 
                          console.log(data.access_token); 
                          localStorage.setItem("token",data.access_token);
                          this.router.navigate(['home']);
          this.products();  
         },
        (err) => {
        console.log(err)
        this.user.username = '';
        this.user.password ='';
            this.snackBar.open("Error when logging!","", {
              duration: 2000,
            });
        }
      );
  }  

  products(){

      this.httpClient.get("http://127.0.0.1:3000/api/products/").subscribe((data)=>{

        console.log(data);

      },(err)=>{console.log(err);});
  }
}
