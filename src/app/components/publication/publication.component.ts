import { Component, OnInit ,Input,Output} from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  
  @Input()
  publication:Publication;


  constructor() { 
  }

  ngOnInit() {
  }

}
