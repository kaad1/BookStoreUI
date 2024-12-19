import { Component, OnInit } from '@angular/core';
import { CitatsServiceService } from '../../services/citats-service.service';
import { Observable } from 'rxjs';
import { AddCitats } from '../../models/add-citats.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

citats$?: Observable<AddCitats[]>
/**
 *
 */
constructor(private citatsService: CitatsServiceService) {
  
  
}
  ngOnInit(): void {
   this.citats$= this.citatsService.getAllCitats();
  }

}
