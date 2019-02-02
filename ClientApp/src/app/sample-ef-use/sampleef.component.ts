import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sample-ef',
  templateUrl: './sampleef.component.html'
})
export class SampleEfComponent {
  public peopleCount: Number;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Number>(baseUrl + 'api/SampleData/PeopleCount').subscribe(result => {
      this.peopleCount = result;
    }, error => console.error(error));
  }
}
