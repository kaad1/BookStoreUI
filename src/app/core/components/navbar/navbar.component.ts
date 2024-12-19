import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/features/auth/models/user.model';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDarkMode = false;
  user? : User;
  /**
   *
   */
  constructor(private authService: AuthService
    ,private router: Router
  ) {
  
    
  }

  ngOnInit(): void {
    this.authService.user()
    .subscribe({
      next: (response) =>{
       this.user=response;
      }
    });

   this.user=  this.authService.getUser();
  }


  onLogOut():void{
    this.authService.logout();
    this.router.navigateByUrl('/');
  }


  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
