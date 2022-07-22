import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { EventResponse } from '../responses/event-response';
import MemberResponse from '../responses/member-response';
import { EventService } from '../services/event.service';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {


  
  

  // currencies = [
  //   { value: 'us', text: 'U.S. Dollar $' },
  //   { value: 'euro', text: 'Euro €' },
  //   { value: 'yen', text: 'Japanese Yen ¥' },
  //   { value: 'pound', text: 'Pounds £' },
  //   { value: 'inr', text: 'Indian Rupee ₹' }
  // ];
  // selected: string = "";
  
  eventAttendeesselectedValue: string = "";
  eventAchorsselectedValue: string = "";

  eventResponse: EventResponse = {
    eventName: "",
    eventAnchorsId: "",
    eventAttendeesId: "",
    //message: "",
    ts: new Date,
    eventTime: new Date,
    id: 0
  };
  isSuccessful = false;
  isMemberFailed = false;
  errorMessage = '';
  addClientForm: FormGroup = new FormGroup({});
  listMembers: MemberResponse [] = [];
  

  members$: Observable<EventResponse[]> | undefined;

  constructor(private eventService: EventService,
              private memberService: MemberService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   // this.members$ = this.memberService.getMembers();
   this.memberService.getMembers().subscribe(data => {
    console.log(data);
    this.listMembers = data;
  });

  // this.addClientForm = this.formBuilder.group({
  //   'eventName': new FormControl(this.eventResponse.eventName),
  //   'eventAnchorsId': new FormControl(this.eventAchorsselectedValue),
  //   'eventAttendeesId': new FormControl(this.eventAttendeesselectedValue),
  //   'eventTime': new FormControl(this.eventResponse.eventTime),
  // });

  }
  addEvent(): void {
    console.log(JSON.stringify(this.eventResponse));
    
this.eventResponse.eventAttendeesId = this.eventAttendeesselectedValue;
this.eventResponse.eventAnchorsId = this.eventAchorsselectedValue;
//console.log(this.eventResponse.message);
    this.eventService.saveEvent(this.eventResponse).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isMemberFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isMemberFailed = true;
      }
    });

    
    //this.memberService.saveMember(this.form.value).subscribe(() => this.members$ = this.memberService.getMembers());
  }

  updateMember(event: EventResponse) {
    console.log('inside updatemember');
    console.log(`member id is ${event.id}`);
    event.id = event.id;
    event.eventAnchorsId = event.eventAnchorsId;
    event.eventAttendeesId = event.eventAttendeesId;
    event.eventName = event.eventName;
    event.eventTime = event.eventTime;
    event.ts = event.ts;
    this.eventService.updateEvent(event).subscribe(() => {});
  }

  removeMember(member: EventResponse) {
    console.log('inside removeMember');
    console.log(`member id is ${member.id}`);
    this.eventService.deleteEvent(member.id).subscribe(() =>this.members$ = this.eventService.getEvents());
  }

}
