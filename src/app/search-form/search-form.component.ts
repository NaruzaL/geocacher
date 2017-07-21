import { Component } from '@angular/core';
import { GeocodingApiService } from "../geocoding-api.service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  providers: [GeocodingApiService]
})
export class SearchFormComponent {
  locations: any[];

  constructor(private geocoding: GeocodingApiService) { }

  getLocationByCoordinates(lat:number, lng:number) {
    this.geocoding.getByLatAndLng(lat, lng).subscirbe(response => {
      this.locations = response.json().results[0];
    })
  }

}
