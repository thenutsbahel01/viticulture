import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthPredictorService {

  constructor(private httpClient: HttpClient) { }

  //Update the service value to return Result: 1, for Success Msg
  getHeartPredictorResult(data) { //sends cholestroletc data to backend which is hostd on another srver
    return of({Result: 0, Status: 200});
    //return this.httpClient.post('http://15.206.14.87:5000/predict', data);
  }
}
