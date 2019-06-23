import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {UserService} from '../../services/user.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser:User;
  emptyFields:boolean;
  passwordError:boolean;

  user=new FormGroup({
    email:new FormControl(''),
    name:new FormControl(''),
    password:new FormControl(''),
  })

  constructor(private userService:UserService,private router:Router) {}

  

  ngOnInit() {
    if(localStorage.getItem("LoggedSuccess")){
      this.router.navigate(['/home'])
    }
    this.emptyFields=false;
    this.passwordError=false;
  }

  onSubmit(){
   if(this.handleError() && this.handlePasswordError()){
     this.newUser={
          id:0,
          name:this.user.value.name,
          email:this.user.value.email,
          password:this.user.value.password,
          mypublications:[],
          mycomments:[]
        }

      this.userService.userRegistration(this.newUser)
      .subscribe(user=>{
            localStorage.setItem("id", user.id.toString());
            localStorage.setItem("LoggedSuccess", "true");
            window.location.reload();
            this.router.navigate(['/home'])
      })
   }else{
      this.emptyFields=true
    }
  }

    handleError(){
      if(this.user.value.name.length===0
        || this.user.value.email.length===0
        || this.user.value.password.length===0){
          return false;
        }
        return true;
    }

    handlePasswordError(){
      if(this.user.value.password.length<6){
        this.passwordError=true;
        return false;
      }
      return true;
    }
}
