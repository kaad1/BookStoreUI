import { Injectable } from '@angular/core';
import { AddBookPost } from '../models/add-bookpost.model';
import { Observable } from 'rxjs';
import { BookPost } from '../models/book-post.model';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BookpostListComponent } from '../bookpost-list/bookpost-list.component';
import { UpdateBookPost } from '../models/update-book-post.model';

@Injectable({
  providedIn: 'root'
})
export class BookPostService {

  constructor(private http: HttpClient) { }

  createBookPost(data: AddBookPost):Observable<BookPost>{
    
   return this.http.post<BookPost>(`${environment.apiBaseUrl}/api/books`, data);
    
      }

     getAllBookPosts(): Observable<BookPost[]>{
      return this.http.get<BookPost[]>(`${environment.apiBaseUrl}/api/books`);
     } 


     getBookPostById(id:string): Observable<BookPost>{
      return this.http.get<BookPost>(`${environment.apiBaseUrl}/api/books/${id}`);



     }

     updateBookPost(id:string, updatedBookPost: UpdateBookPost): Observable<BookPost>{
     return this.http.put<BookPost>(`${environment.apiBaseUrl}/api/books/${id}`,
      updatedBookPost
     )
     }

      deleteBookPost(urlHandle: string): Observable<BookPost>{
       return this.http.delete<BookPost>(`${environment.apiBaseUrl}/api/books/${urlHandle}`);
     }

     getBookPostByUrl(id:string): Observable<BookPost>{
      return this.http.get<BookPost>(`${environment.apiBaseUrl}/api/books/${id}`);



     }
     
}
