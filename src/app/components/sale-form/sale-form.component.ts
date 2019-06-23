import { Component, OnInit,Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import {UpdatePublication} from '../../store/actions/publications.action'
import { Router } from '@angular/router';
import { State } from 'src/app/store/reducers/root.reducer';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.css']
})
export class SaleFormComponent implements OnInit {

  @Input()
  publication:Publication;

  emptyField:boolean;
  newPrice=new FormControl('');

  constructor(private store:Store<State>,private router:Router) {
    this.emptyField=true;
   }

  ngOnInit() {
  }

  setNewPrice(){
    if(this.handleError()){
   this.publication.onSale=true
   this.publication.newPrice=this.newPrice.value;

    this.store.dispatch(new UpdatePublication(this.publication))
    this.router.navigate(['/home'])
  }else{
    this.emptyField=false;
  }
  }

  handleError(){
    if(this.newPrice.value.length===0)return false;

    return true;
  }
}
