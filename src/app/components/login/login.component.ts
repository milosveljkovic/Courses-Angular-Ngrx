import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { State } from 'src/app/store/reducers/root.reducer';
import { Store } from '@ngrx/store';
import {UserService} from '../../services/user.service'
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authError:boolean;
  alreadyLogged:boolean;

  email=new FormControl('');
  password=new FormControl('');

  constructor(private userService:UserService,private router:Router) {this.authError=false; }

  ngOnInit() {
    this.alreadyLogged=Boolean(localStorage.getItem("LoggedSuccess"))

    if(this.alreadyLogged){this.router.navigate(['/home'])}
  }

  onSubmit(){
    var User=this.userService.GetUserWithEmailAndPassword(this.email.value,this.password.value);
    User.subscribe(user=>{
      if(user[0]===undefined){this.authError=true;}
      else{
        localStorage.setItem("id", user[0].id);
        localStorage.setItem("LoggedSuccess", "true");
        this.router.navigate(['/home'])
      }
    })
  }

}
