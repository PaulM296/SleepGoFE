import { Component } from '@angular/core';
@Component({
  selector: 'app-write-reviews',
  templateUrl: './write-reviews.component.html',
  styleUrls: ['./write-reviews.component.css']
})
export class WriteReviewsComponent {

  // deleteAccount() {
  //   if (this.username && this.token) {
  //     this.apiService.deleteUser(this.username, this.token).subscribe({
  //       next: () => {
  //         console.log('Review discarded');
  //         this.snackBar.open('Review discarded', 'Close', { duration: 3000 });
  //         localStorage.removeItem('username');
  //         localStorage.removeItem('token');
  //         this.router.navigate(['/hotel']);
  //       },
  //       error: (error) => {
  //         console.log('The attempt failed');
  //         this.snackBar.open('Failed to delete profile', 'Close', { duration: 3000 });
  //         console.log(error);
  //       }
  //     });
  //   }
  // }

}
