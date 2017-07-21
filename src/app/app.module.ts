import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { GeocodingApiService } from './geocoding-api.service';
import { AddressResultComponent } from './address-result/address-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    ResultPageComponent,
    AddressResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [GeocodingApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
