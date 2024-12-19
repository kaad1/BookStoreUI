import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BookPostService } from '../services/book-post.service';
import { BookPost } from '../models/book-post.model';
import { CategoryService } from '../../category/services/category.service';
import { Category } from '../../category/models/category.model';
import { UpdateBookPost } from '../models/update-book-post.model';
import { ImageService } from 'src/app/shared/components/image-selector/image.service';

@Component({
  selector: 'app-edit-bookpost',
  templateUrl: './edit-bookpost.component.html',
  styleUrls: ['./edit-bookpost.component.css']
})
export class EditBookpostComponent implements OnInit, OnDestroy {
  
  id: string |null=null;
  isImageSelectorVisible: boolean= false;
  model?: BookPost;
  routeSubscription?: Subscription;
 updateBookPostubscription?: Subscription;
 getBookPostSubscription?: Subscription;
 deleteBookPostSubscription?: Subscription;
 imageSelectSubscription?: Subscription;

  categories$?:Observable<Category[]>;
  selectedCategories?: string[];
  
  /**
   *
   */
  constructor(private route: ActivatedRoute,
    private bookPostService: BookPostService,
    private categoryService :CategoryService,
  private router:Router,
private imageService: ImageService) 
    {
   
  }
  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.updateBookPostubscription?.unsubscribe();
    this.getBookPostSubscription?.unsubscribe();
    this.deleteBookPostSubscription?.unsubscribe();
    this.imageSelectSubscription?.unsubscribe();
    
  }

  onFormSubmit():void{
  //Convert this model to request object
    if(this.model && this.id){
      var updateBlogPost: UpdateBookPost={
        title:this.model.title,
        shortDescription:this.model.shortDescription,
        author:this.model.author,
        featuredImageUrl:this.model.featuredImageUrl,
        urlHandle:this.model.urlHandle,
        publishedDate:this.model.publishedDate,
       categories:this.selectedCategories?? []
      };
    this.updateBookPostubscription=  this.bookPostService.updateBookPost(this.id, updateBlogPost)
      .subscribe({
        next: (response)=>{
         this.router.navigateByUrl('/user/bookposts');
        }
      })
    }

  }

  onDelete(): void{
    if(this.id){
     this.deleteBookPostSubscription= this.bookPostService.deleteBookPost(this.id)
      .subscribe({
        next:(response) =>{
          this.router.navigateByUrl('/user/bookposts')
        }
      })
    }
  }
  
  ngOnInit(): void {
    this.categories$=this.categoryService.getAllCategories();
   this.routeSubscription= this.route.paramMap.subscribe({
      next: (params) =>{
       this.id=params.get('id')

       //Get bookpost from api
       if(this.id){
        this.getBookPostSubscription=this.bookPostService.getBookPostById(this.id).subscribe({
          next:(response)=>{
            this.model=response;
            this.selectedCategories=response.categories.map(x=>x.id);
          }
        });
       }
          this.imageService.onSelectImage().subscribe
          ({
            next:(response)=>{
              if(this.model){
                this.model.featuredImageUrl=response.url;
                this.isImageSelectorVisible=false;
              }

            }
          })

      }
    });
  }


  openImageSelector(): void{

    this.isImageSelectorVisible=true;

  }
  closeImageSelector(): void{
    this.isImageSelectorVisible =false;
  }
}
