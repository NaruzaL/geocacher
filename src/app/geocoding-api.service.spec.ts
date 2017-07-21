import { TestBed, inject } from '@angular/core/testing';

import { GeocodingApiService } from './geocoding-api.service';

describe('GeocodingApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeocodingApiService]
    });
  });

  it('should ...', inject([GeocodingApiService], (service: GeocodingApiService) => {
    expect(service).toBeTruthy();
  }));
});
