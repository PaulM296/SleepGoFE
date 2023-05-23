import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../services/ApiService";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  private errorMessage!: string;

  constructor(private router: Router, private apiService: ApiService) {
  }

  ngOnInit() {
  }

  logout(): void {
    const username = localStorage.getItem('username') as string; // Replace with the actual username
    const token = localStorage.getItem('token') as string; // Replace with the actual token

    this.apiService.logoutUser(username, token).subscribe({
      next: () => {
        // Handle successful logout
        // For example, navigate to the home page or display a success message
        console.log('Logout successful');
        // Navigate to the home page
        // Assuming you have a Router instance injected in your component's constructor

        localStorage.removeItem('username');
        localStorage.removeItem('token');

        this.router.navigate(['']);
      },
      error: (error) => {
        // Handle logout error
        // For example, display an error message
        console.error('Logout error:', error);
        // Display an error message to the user
        this.errorMessage = 'An error occurred during logout. Please try again.';
      },
      complete: () => {
        console.log('Logout complete'); // Add this line to check if the complete callback is triggered
      }
    });
  }


}
