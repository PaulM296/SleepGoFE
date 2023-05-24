import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../services/ApiService";
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @ViewChild('sidenav') sidenav!: MatSidenav;

  private errorMessage!: string;
  constructor(private router: Router, private apiService: ApiService) {
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

        this.router.navigate(['']);
      },
      error: (error) => {
        console.error('Logout error:', error);
        this.errorMessage = 'An error occurred during logout. Please try again.';
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
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

}
