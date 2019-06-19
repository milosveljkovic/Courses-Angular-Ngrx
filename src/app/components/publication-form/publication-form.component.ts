import { Component, OnInit,Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import {PublicationState} from '../../store/reducers/publications.reducer'
import {UpdatePublication} from '../../store/actions/publications.action'

@Component({
  selector: 'app-publication-form',
  templateUrl: './publication-form.component.html',
  styleUrls: ['./publication-form.component.css']
})
export class PublicationFormComponent implements OnInit {

  updatedPublication:Publication

  @Input()
  publication:Publication;

  newPrice=new FormControl('');

  constructor(private store:Store<PublicationState>) { }

  ngOnInit() {
  }

  setNewPrice(){
    if(this.handleError())
    if(this.newPrice.value.length!==0){this.publication.onSale=true}
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
      rating:{
        votersRatingSum:this.publication.rating.votersRatingSum,
        numberOfVoters:this.publication.rating.numberOfVoters
      }
    }
    this.store.dispatch(new UpdatePublication(this.updatedPublication))
  }

  handleError(){
    if(this.newPrice.value.length===0)return false;

    return true;
  }
}
