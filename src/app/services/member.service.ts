import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import MemberResponse from '../responses/member-response';



@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpClient: HttpClient) { }

  getMembers(): Observable<MemberResponse[]> {
    return this.httpClient.get<MemberResponse[]>(`${environment.apiUrl}/members`);
  }

  getMember(memberId: number){
    return this.httpClient.get<MemberResponse[]>(`${environment.apiUrl}/members/${memberId}`)
  }

  saveMember(member: MemberResponse): Observable<MemberResponse[]> {
    return this.httpClient.post<MemberResponse[]>(`${environment.apiUrl}/members`, member);
  }

  updateMember(member: MemberResponse): Observable<MemberResponse[]> {
    return this.httpClient.put<MemberResponse[]>(`${environment.apiUrl}/members`, member);
  }

  deleteMember(memberId: number){
    return this.httpClient.delete<MemberResponse[]>(`${environment.apiUrl}/members/${memberId}`);
  }
}
