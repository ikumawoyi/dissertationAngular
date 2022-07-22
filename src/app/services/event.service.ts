import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventResponse } from '../responses/event-response';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  getEvents(): Observable<EventResponse[]> {
    return this.httpClient.get<EventResponse[]>(`${environment.apiUrl}/events`);
  }

  getEvent(eventId: number){
    return this.httpClient.get<EventResponse[]>(`${environment.apiUrl}/events/${eventId}`)
  }

  saveEvent(event: EventResponse): Observable<EventResponse[]> {
    return this.httpClient.post<EventResponse[]>(`${environment.apiUrl}/events`, event);
  }

  updateEvent(event: EventResponse): Observable<EventResponse[]> {
    return this.httpClient.put<EventResponse[]>(`${environment.apiUrl}/events`, event);
  }

  deleteEvent(eventId: number){
    return this.httpClient.delete<EventResponse[]>(`${environment.apiUrl}/events/${eventId}`);
  }
}