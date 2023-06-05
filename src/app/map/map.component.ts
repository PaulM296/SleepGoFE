import {Component, OnInit} from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = 'google-maps';

  ngOnInit() {
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

}
