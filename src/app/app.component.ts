import { Component, OnInit } from '@angular/core';
import { SurveyService } from './services/survey.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  json: JSON;
  cached: string;

  constructor(private surveyService: SurveyService) {

  }

  getSuveys(uuids) {
    this.surveyService.getSurveys(uuids).subscribe(
      (data) => {
        var value = JSON.parse(JSON.stringify(data));
        this.json = value.survey;
      });

  }

  ngOnInit() {
    this.cached = JSON.parse(window.sessionStorage.getItem('program_uuid'));
    this.getSuveys(this.cached);

  }
}
