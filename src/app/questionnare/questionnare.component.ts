import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionnare',
  templateUrl: './questionnare.component.html',
  styleUrls: ['./questionnare.component.css']
})
export class QuestionnareComponent implements OnInit {
  json: JSON;
  cached: string;

  constructor(private surveyService: SurveyService,
    private route: Router, private actiavtedRoute: ActivatedRoute) { }

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

  onSurveyDone(response) {
    const date = new Date().toISOString().slice(0, 10);
    const department = 'not defined';
    const program = 'not defined';
    const location = window.sessionStorage.getItem('location');
    console.log('locs', location);

    this.actiavtedRoute.params.subscribe((params) => {
      const encounterInfo = {
        'surveyId': 1,
        'location': location,
        'date': date,
        'department': department,
        'clinicalProgramId': program
      };
      const toServer = {
        'encounterInfo': encounterInfo,
        'responseInfo': response
      };

      this.surveyService.storeSurveys(toServer).subscribe();

    });

    this.route.navigate(['/success']);
  }

}
