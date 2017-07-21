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

  getLocationByCoordinates(lat:string, lng:string) {
    this.geocoding.getByLatAndLng(lat, lng).subscribe(response => {
      this.locations = response.json().results;
      console.log(response.json())
    })
  }

}
