  import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
  import {Router} from "@angular/router";
  import {ApiService} from "../services/ApiService";
  import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
  import {MatSnackBar} from "@angular/material/snack-bar";

  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  })
  export class HeaderComponent implements OnInit{

    @ViewChild('sidenav') sidenav!: MatSidenav;
    @Output()
    toggleSidenavForMe: EventEmitter<any> = new EventEmitter<any>();
    
    private errorMessage!: string;

    constructor(private router: Router, private apiService: ApiService, private snackBar: MatSnackBar) {
    }

    ngOnInit() {
    }

    logout(): void {
      const username = localStorage.getItem('username') as string;
      const token = localStorage.getItem('token') as string;

      this.apiService.logoutUser(username, token).subscribe({
        next: () => {

          console.log('Logout successful');
          localStorage.removeItem('username');
          localStorage.removeItem('token');
          this.snackBar.open('Logout successful', 'Close', { duration: 3000 });
          this.router.navigate(['']);
        },
        error: (error) => {
          console.error('Logout error:', error);
          this.snackBar.open('There was a problem with the logout', 'Close', { duration: 3000 });
        },
        complete: () => {
          console.log('Logout complete');
        }
      });
    }

    isLoggedIn(): boolean {
      return localStorage.getItem('token') !== null;
    }

    isHomePage(): boolean {
      return this.router.url === '/';
    }

    toggleSideNav() {
      this.toggleSidenavForMe.emit();
      }


  }
