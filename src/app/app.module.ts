import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';
import { BookpostListComponent } from './features/book-post/bookpost-list/bookpost-list.component';
import { AddBookpostComponent } from './features/book-post/add-bookpost/add-bookpost.component';
import { EditBookpostComponent } from './features/book-post/edit-bookpost/edit-bookpost.component';
import { ImageSelectorComponent } from './shared/components/image-selector/image-selector.component';
import { HomeComponent } from './features/public/home/home.component';
import { BookDetailsComponent } from './features/public/book-details/book-details.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegistrationComponent } from './features/auth/registration/registration/registration.component';
import { BooksCitatsComponent } from './features/citats/books-citats/books-citats.component';
import { AddCitatComponent } from './features/citats/add-citat/add-citat.component';
import { QuoteComponent } from './features/citats/public-citats/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    BookpostListComponent,
    AddBookpostComponent,
    EditBookpostComponent,
    ImageSelectorComponent,
    HomeComponent,
    BookDetailsComponent,
    LoginComponent,
    RegistrationComponent,
    BooksCitatsComponent,
    AddCitatComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
