import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {AddPublication} from '../../store/actions/publications.action'
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/root.reducer';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {

  emptyField:boolean;
  myPublication:Publication;

  userPublication=new FormGroup({
    title:new FormControl(''),
    location:new FormControl(''),
    price:new FormControl(''),
    duration:new FormControl(''),
    description:new FormControl(''),
    imageUrl:new FormControl('')
  })

  constructor(private store:Store<State>,) { 
      this.emptyField=true; 
    }

  ngOnInit() {
  }

  onSubmit(){
    if(true){
      this.myPublication={
        id:0,
        title:this.userPublication.value.title,
        location:this.userPublication.value.location,
        price:this.userPublication.value.price,
        duration:this.userPublication.value.duration,
        isAvailable: true,
        onSale: false,
        description:this.userPublication.value.description,
        imageUrl:this.userPublication.value.imageUrl
      }
      this.store.dispatch(new AddPublication(this.myPublication));

    }else{
      this.emptyField=false;
    }
  }

  handleError(){
    if(this.userPublication.value.title.length===0
      || this.userPublication.value.price.length===0
      || this.userPublication.value.description.length===0)
    return true;

    return false;
  }

}
