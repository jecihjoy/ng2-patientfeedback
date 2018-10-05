import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from '../services/survey.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locationArray: {'uuid': string, 'display': string}[];
  constructor(private router: Router,
              private httpService: SurveyService,
              private route: ActivatedRoute) {}

  onSave(location) {
    console.log('uuid value', location);
    if (location !== 'Select Location') {
      let loc_name;
      for (const loc of this.locationArray) {
        if (loc.display === location) {
          loc_name = loc.display;
        }
      }
      window.sessionStorage.setItem('location', location);
      this.router.navigate(['/clinic'], { relativeTo: this.route });
    }
  }
  ngOnInit() {
    this.httpService.getLocations().subscribe(
      (response: Response) => {
        this.locationArray = JSON.parse(JSON.stringify(response));
        // locs.forEach(element => {
        //  // this.locationArray.push(element.name);
        // });
      });
  }
}
