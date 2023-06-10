import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../services/ApiService";
import { Loader } from "@googlemaps/js-api-loader";

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  hotelId!: number;
  hotel: any;
  amenities!: any[];
  reviews!: any[];
  rooms!: any[];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.hotelId = +idParam;
        this.getHotelDetails(this.hotelId);
        this.getAmenitiesByHotelId(this.hotelId);
        this.getRoomsByHotelId(this.hotelId);
        this.getReviewsByHotelId(this.hotelId);
      } else {
        console.log("Incorrect mapping");
      }
    });
  }

  getHotelDetails(id: number): void {
    this.apiService.getHotelById(id).subscribe({
      next: (response: any) => {
        this.hotel = response;
        this.hotel.latitude = response.latitude;
        this.hotel.longitude = response.longitude;
        this.initializeMap();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  initializeMap(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyBrsELle3cF-2gxMmpCCpsRyeNGDIq5Weg'
    });

    loader.load().then(() => {
      const mapElement = document.getElementById("map") as HTMLElement;
      const mapOptions: google.maps.MapOptions = {
        center: { lat: this.hotel.latitude, lng: this.hotel.longitude },
        zoom: 14
      };
      const map = new google.maps.Map(mapElement, mapOptions);

      // Add marker
      const markerOptions: google.maps.MarkerOptions = {
        position: { lat: this.hotel.latitude, lng: this.hotel.longitude },
        map: map,
        title: 'Hotel Location'
      };
      const marker = new google.maps.Marker(markerOptions);
    });
  }

  getAmenitiesByHotelId(hotelId: number): void {
    this.apiService.getAmenitiesByHotelId(hotelId).subscribe({
      next: (response: any[]) => {
        this.amenities = response;
        console.log("Amenities fetched for hotelId:", hotelId);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  getRoomsByHotelId(hotelId: number): void {
    this.apiService.getRoomsByHotelId(hotelId).subscribe({
      next: (response: any[]) => {
        this.rooms = response;
        console.log('Rooms Fetched for hotelId:', hotelId);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  getReviewsByHotelId(hotelId: number): void {
    this.apiService.getReviewsByHotelId(hotelId).subscribe({
      next: (response: any[]) => {
        this.reviews = response;
        console.log('Reviews fetched for hotelId:', hotelId);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  addReview(hotelId: number) {
    this.router.navigate(['/write-reviews', hotelId]);
  }

  addReservation() {
    this.router.navigate(['/write-reservations']);
  }

}
