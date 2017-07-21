import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent {
  @Input() childLocations;
  @Input() childAddress;
  constructor() { }

  ngOnInit() {
  }

}
