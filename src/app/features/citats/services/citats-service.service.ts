import { Injectable } from '@angular/core';
import { AddCitats } from '../models/add-citats.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AddCitatPost } from '../models/citat-post.model';

@Injectable({
  providedIn: 'root'
})
export class CitatsServiceService {

  constructor(private http: HttpClient) { }


  createCitatPost(data: AddCitats):Observable<AddCitats>{
    return this.http.post<AddCitats>(`${environment.apiBaseUrl}/api/citats`, data);

  }


  getAllCitats(): Observable<AddCitats[]>{
  return this.http.get<AddCitats[]>(`${environment.apiBaseUrl}/api/citats` );
  }
}
