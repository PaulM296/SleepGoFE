import {Component, HostListener, OnInit} from '@angular/core';
import {ApiService} from "../services/ApiService";
import {FormControl, FormGroup} from "@angular/forms";
import {F} from "@angular/cdk/keycodes";
import {error} from "@angular/compiler-cli/src/transformers/util";


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
  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.getAllHotels();
  }

  getAllHotels(): void {
    this.apiService.getAllHotels().subscribe({
      next: (response: Object) => {
        this.hotels = response as any[];
      },
      error: (error: any) => {
        console.log(error);
      }
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

}
