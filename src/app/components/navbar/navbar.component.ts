import { Component, OnInit } from '@angular/core';
import { UserLogout } from 'src/app/store/actions/user.action';
import {Store} from '@ngrx/store'
import {State} from '../../store/reducers/root.reducer'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private store:Store<State>) { }

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
    this.store.dispatch(new UserLogout())
  }

}
