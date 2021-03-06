import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';

@Injectable()
export class GeocodingApiService {

  constructor(private http: Http) { }

  getByLatAndLng(lat: string,lng: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key="+geoKey)
  }


  getByAddress(streetNumber:string, route: string, locality: string, admnArea: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+streetNumber+",+"+route+",+"+locality+",+"+admnArea+"&key="+geoKey)
  }

}
