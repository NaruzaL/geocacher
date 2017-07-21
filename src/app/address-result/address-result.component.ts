import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-address-result',
  templateUrl: './address-result.component.html',
  styleUrls: ['./address-result.component.css']
})
export class AddressResultComponent {
    @Input() childAddress;

  constructor() { }

}
