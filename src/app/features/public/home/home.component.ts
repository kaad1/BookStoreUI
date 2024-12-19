import { Component, OnInit } from '@angular/core';
import { BookPostService } from '../../book-post/services/book-post.service';
import { Observable } from 'rxjs';
import { BookPost } from '../../book-post/models/book-post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  blogs$?: Observable<BookPost[]>
  /**
   *
   */
  constructor(private bookPostSevice: BookPostService) {
   
    
  }
  ngOnInit(): void {
 this.blogs$=this.bookPostSevice.getAllBookPosts();
 

}


}
