import { Component, OnInit } from '@angular/core';
import { BookPostService } from '../services/book-post.service';
import { Observable } from 'rxjs';
import { BookPost } from '../models/book-post.model';

@Component({
  selector: 'app-bookpost-list',
  templateUrl: './bookpost-list.component.html',
  styleUrls: ['./bookpost-list.component.css']
})
export class BookpostListComponent implements OnInit{
  

  bookPosts$?: Observable<BookPost[]>;
  /**
   *
   */
  constructor(private bookPostService: BookPostService) {
    
    
  }
  ngOnInit(): void {
   // get all bookpost from api
   this.bookPosts$= this.bookPostService.getAllBookPosts()
    

  }

}
