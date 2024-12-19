import { Component } from '@angular/core';
import { AddCitats } from '../models/add-citats.model';
import { CitatsServiceService } from '../services/citats-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-citat',
  templateUrl: './add-citat.component.html',
  styleUrls: ['./add-citat.component.css']
})
export class AddCitatComponent {

  model: AddCitats;

/**
 *
 */
constructor(private citatService: CitatsServiceService,
  private router: Router
) {
 this.model={
  citat:'',
  author:'',
  book:''
 }
}

OnSubmitForm(): void{
this.citatService.createCitatPost(this.model)
.subscribe({
  next:(response) =>{
  this.router.navigateByUrl('user/citats')
  }
})
 
}


}
