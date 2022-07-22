import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OccasionResponse } from '../responses/occasion-response';



@Injectable({
  providedIn: 'root'
})
export class OccasionService {

  constructor(private httpClient: HttpClient) { }

  getOccasions(): Observable<OccasionResponse[]> {
    return this.httpClient.get<OccasionResponse[]>(`${environment.apiUrl}/occasions`);
  }

  getOccasion(occasionId: number){
    return this.httpClient.get<OccasionResponse[]>(`${environment.apiUrl}/occasions/${occasionId}`)
  }

  saveOccasion(occasion: OccasionResponse): Observable<OccasionResponse[]> {
    return this.httpClient.post<OccasionResponse[]>(`${environment.apiUrl}/occasions`, occasion);
  }

  updateOccasion(occasion: OccasionResponse): Observable<OccasionResponse[]> {
    return this.httpClient.put<OccasionResponse[]>(`${environment.apiUrl}/occasions`, occasion);
  }

  deleteOccasion(occasionId: number){
    return this.httpClient.delete<OccasionResponse[]>(`${environment.apiUrl}/occasions/${occasionId}`);
  }
}
