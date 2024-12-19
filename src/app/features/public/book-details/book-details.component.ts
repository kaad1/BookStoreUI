import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookPostService } from '../../book-post/services/book-post.service';
import { Observable } from 'rxjs';
import { BookPost } from '../../book-post/models/book-post.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{
  url: string | null = null;
  bookPost$?: Observable<BookPost>;

  /**
   *
   */
  constructor(private route: ActivatedRoute,
    private bookPostService: BookPostService
  ) {

  }
  ngOnInit(): void {
this.route.paramMap.subscribe({
  next:(params) =>{
    this.url=params.get('url')
  }
});

//fech book details by url
if(this.url){
  this.bookPost$=this.bookPostService.getBookPostByUrl(this.url);
}

}


}
