import { Component, OnInit } from '@angular/core';
import { CitatsServiceService } from '../services/citats-service.service';
import { Observable } from 'rxjs';
import { AddCitatPost } from '../models/citat-post.model';
import { AddCitats } from '../models/add-citats.model';

@Component({
  selector: 'app-books-citats',
  templateUrl: './books-citats.component.html',
  styleUrls: ['./books-citats.component.css']
})
export class BooksCitatsComponent  implements OnInit {
 
  citatsPosts$?: Observable<AddCitats[]>;
 /**
  *
  */
 constructor(private citatsService:CitatsServiceService) {
 
  
 }
  ngOnInit(): void {
   
       this.citatsPosts$=this.citatsService.getAllCitats();
  
    

  }

}
