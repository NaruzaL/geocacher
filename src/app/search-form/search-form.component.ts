import { Component } from '@angular/core';
import { GeocodingApiService } from "../geocoding-api.service";
import { Observable } from 'rxjs/Observable';
import { Coord } from '../coord.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  providers: [GeocodingApiService]
})
export class SearchFormComponent {
  locations: any[]=null;
  address: string = null;

  constructor(private geocoding: GeocodingApiService) { }

  getLocationByCoordinates(lat:string, lng:string) {
    this.geocoding.getByLatAndLng(lat, lng).subscribe(response => {
      this.address = response.json().results[0].formatted_address;
      console.log(response.json().results[0].formatted_address)
    })
  }

  getLocationByAddress(streetNumber:string, route: string, locality: string, admnArea: string) {
    this.geocoding.getByAddress(streetNumber, route, locality, admnArea).subscribe(response => {
      this.locations = response.json().results[0].geometry.location;
      console.log(response.json().results[0].geometry.location.lat)
      console.log(response.json().results[0].geometry.location.lng)
    })
  }

}
