import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import {  map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

// const BASEURL = 'https://ngx.ampath.or.ke/patient-feedbackserver/';
const BASEURL = 'http://localhost:5000/';

@Injectable()
export class SurveyService {
    constructor(private http: HttpClient) {}

    getCredentials() {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const credentials = sessionStorage.getItem('auth.credentials');
        headers.append('Authorization', 'Basic ' + credentials);
        return headers;
    }
    getSurveyPrograms(): Observable<any> {
        return this.http.get(BASEURL + 'getSurveyPrograms', {
            headers: this.getCredentials()
          }).pipe(tap(data  => console.log('data returned')));
    }
    programsSchema() {
        return this.http.get(BASEURL + 'programsJsonSchema', {
            headers: this.getCredentials()
          });
    }
    getPrograms() {
        return this.http.get(BASEURL + 'getDepts', {
            headers: this.getCredentials()
          });
    }
    getSurveys(programs) {
        return this.http.post(BASEURL + 'getSurveys', programs, {
            headers: this.getCredentials()
          });
    }
    getLocations() {
        return this.http.get(BASEURL + 'getLocations', {
            headers: this.getCredentials()
          });
    }
    storeSurveys(response) {
        return this.http.post(BASEURL + 'storeSurveys', response, {
            headers: this.getCredentials()
          });
    }
    login(response) {
        return this.http.post(BASEURL + 'login', response, {
            headers: this.getCredentials()
          });
    }
    logout() {
        return this.http.get(BASEURL + 'logout', {
            headers: this.getCredentials()
          });
    }

}
