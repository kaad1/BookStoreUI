import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddBookPost } from '../models/add-bookpost.model';
import { Title } from '@angular/platform-browser';
import { BookPostService } from '../services/book-post.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../category/services/category.service';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../../category/models/category.model';
import { ImageService } from 'src/app/shared/components/image-selector/image.service';

@Component({
  selector: 'app-add-bookpost',
  templateUrl: './add-bookpost.component.html',
  styleUrls: ['./add-bookpost.component.css']
})
export class AddBookpostComponent implements OnInit , OnDestroy{
  isImageSelectorVisible: boolean= false;
  model: AddBookPost;
  categories$?: Observable<Category[]>
  imageSelectorSubscription?: Subscription;
  /**
   *
   */
  constructor(private bookPostService: BookPostService,
   private router: Router,
   private categoryService : CategoryService, private imageService: ImageService
  ){
  this.model={

    title:'',
    shortDescription:'',
    author:'',
    featuredImageUrl:'',
    urlHandle:'',
    publishedDate:new Date(),
    categories:[]

  }
  }
  


  ngOnInit(): void {
   this.categories$= this.categoryService.getAllCategories();

  this.imageSelectorSubscription= this.imageService.onSelectImage()
   .subscribe({
    next: (selectedImage) =>{
      this.model.featuredImageUrl=selectedImage.url;
      this.closeImageSelector();
    }
   })
  }

  onFormSubmit(): void{
    console.log(this.model);
   this.bookPostService.createBookPost(this.model)
   .subscribe({
    next:(response) =>{
        this.router.navigateByUrl('/user/bookposts')
    }
   })
  }

  
  openImageSelector(): void{

    this.isImageSelectorVisible=true;

  }
  closeImageSelector(): void{
    this.isImageSelectorVisible =false;
  }

  ngOnDestroy(): void {
    this.imageSelectorSubscription?.unsubscribe();
  }
}
