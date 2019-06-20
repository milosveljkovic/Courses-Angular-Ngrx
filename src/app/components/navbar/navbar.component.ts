import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  alreadyLogged:boolean;

  ngOnInit() {
    if(localStorage.getItem("LoggedSuccess")==="true"){
      this.alreadyLogged=true;
    }else{
      this.alreadyLogged=false;
    }
    console.log(this.alreadyLogged);
  }

  handleLogout(){
    localStorage.clear();
  }

}
