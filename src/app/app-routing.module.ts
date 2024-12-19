import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';
import { BookpostListComponent } from './features/book-post/bookpost-list/bookpost-list.component';
import { AddBookpostComponent } from './features/book-post/add-bookpost/add-bookpost.component';
import { EditBookpostComponent } from './features/book-post/edit-bookpost/edit-bookpost.component';
import { HomeComponent } from './features/public/home/home.component';
import { BookDetailsComponent } from './features/public/book-details/book-details.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegistrationComponent } from './features/auth/registration/registration/registration.component';
import { BooksCitatsComponent } from './features/citats/books-citats/books-citats.component';
import { AddCitatComponent } from './features/citats/add-citat/add-citat.component';
import { QuoteComponent } from './features/citats/public-citats/quote/quote.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },{

    path: 'myquotes',
    component:QuoteComponent
  },{

    path: 'book/:url',
    component:BookDetailsComponent
  },
  {
  path:'user/categories',
  component:CategoryListComponent
},{
  path:'user/categories/add',
  component:AddCategoryComponent
},{

  path: 'user/categories/:id',
  component:EditCategoryComponent
},{
  path:'user/bookposts',
  component:BookpostListComponent

},
{
  path: 'user/bookposts/add',
  component:AddBookpostComponent
},{
  path:'user/bookposts/:id',
  component:EditBookpostComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'registration',
  component:RegistrationComponent
},
{
  path:'user/citats',
  component:BooksCitatsComponent
},
{
  path:'user/citats/add',
  component:AddCitatComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
