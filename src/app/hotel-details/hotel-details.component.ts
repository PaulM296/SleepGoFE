import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../services/ApiService";
import {Loader} from "@googlemaps/js-api-loader";

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  hotelId!: number;
  hotel: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.hotelId = +idParam;
        this.getHotelDetails(this.hotelId);
      } else {
        console.log("Incorrect mapping");
      }
    });
    let loader = new Loader({
      apiKey: 'AIzaSyBrsELle3cF-2gxMmpCCpsRyeNGDIq5Weg'
    })

    loader.load().then(() => {
      const mapElement = document.getElementById("map") as HTMLElement;
      new google.maps.Map(mapElement, {
        center: { lat: 51.233334, lng: 6.783333 },
        zoom: 13
      });
    });
  }

  getHotelDetails(id: number): void {
    this.apiService.getHotelById(id).subscribe({
      next: (response: Object) => {
        this.hotel = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }


}
