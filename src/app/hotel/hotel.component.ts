import {Component, HostListener, OnInit} from '@angular/core';
import {ApiService} from "../services/ApiService";
import {FormControl, FormGroup} from "@angular/forms";
import {F} from "@angular/cdk/keycodes";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Router} from "@angular/router";
import {ReviewModel} from "../reviews/review.model";


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotels!: any[];
  searchForm: FormGroup = new FormGroup({
    search: new FormControl('')
  })
  constructor(private apiService: ApiService, private router: Router) {

  }

  ngOnInit() {
    this.getAllHotels();
  }

  getAllHotels(): void {
    this.apiService.getAllHotels().subscribe({
      next: (response: any) => {
        this.hotels = response.map((hotel: any) => ({
          ...hotel,
          imageUrl: `assets/images/hotel-images/${hotel.hotelId}.png`,
        }));
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }


  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  searchText: string = '';

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  navigateToHotelPage(hotelId: number) {
    this.router.navigate(['/hotel', hotelId]);
  }

}
