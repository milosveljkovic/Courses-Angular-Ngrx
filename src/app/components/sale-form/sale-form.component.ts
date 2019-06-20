import { Component, OnInit,Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import {PublicationState} from '../../store/adapters/publications.adapter'
import {UpdatePublication} from '../../store/actions/publications.action'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.css']
})
export class SaleFormComponent implements OnInit {
  @Input()
  publication:Publication;

  updatedPublication:Publication
  emptyField:boolean;

  newPrice=new FormControl('');

  constructor(private store:Store<PublicationState>,private router:Router) {
    this.emptyField=true;
   }

  ngOnInit() {
  }

  setNewPrice(){
    if(this.handleError()){
   this.publication.onSale=true

    this.updatedPublication={
      id:this.publication.id,
      title:this.publication.title,
      location:this.publication.location,
      price:this.publication.price,
      newPrice:this.newPrice.value,
      duration:this.publication.duration,
      isAvailable:this.publication.isAvailable,
      onSale:this.publication.onSale,
      description:this.publication.description,
      imageUrl:this.publication.imageUrl,
      rating:
      {
        votersRatingSum:this.publication.rating.votersRatingSum,
        numberOfVoters:this.publication.rating.numberOfVoters
      }
    }
    this.store.dispatch(new UpdatePublication(this.updatedPublication))
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
