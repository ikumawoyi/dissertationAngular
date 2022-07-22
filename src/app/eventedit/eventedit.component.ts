import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventResponse } from '../responses/event-response';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-eventedit',
  templateUrl: './eventedit.component.html',
  styleUrls: ['./eventedit.component.css']
})
export class EventeditComponent implements OnInit {

  eventEditId: number = 0;
  dataLoaded: boolean = false
  eventDetails: any;
  editEventForm: FormGroup = new FormGroup({});
  constructor(private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.dataLoaded = false;
    this.activatedRoute.params.subscribe(data => {
      this.eventEditId = data['id'];
    });

    if(this.eventEditId !== 0){
      this.eventService.getEvent(this.eventEditId)
      .subscribe(data => {
        this.eventDetails = data;
        console.log(this.eventDetails);
        //Object.assign(this.homeDetails, data);


        this.editEventForm = this.formBuilder.group({
          'eventId': new FormControl(this.eventDetails.id),
          'eventAnchors': new FormControl(this.eventDetails.eventAnchors),
          'eventAttendees': new FormControl(this.eventDetails.eventAttendees),
          'eventName': new FormControl(this.eventDetails.eventName),
          'message': new FormControl(this.eventDetails.message),
          'eventTime': new FormControl(this.eventDetails.eventTime),
          'eventTs': new Date(),
        })
        this.dataLoaded = true;
      })
    }
  }
  updateEvent(eventEd: EventResponse){
    eventEd.id = this.editEventForm.value.eventId;
    eventEd.eventAnchorsId = this.editEventForm.value.eventAnchors;
    eventEd.eventAttendeesId = this.editEventForm.value.eventAttendees;
    eventEd.eventName = this.editEventForm.value.eventName;
    eventEd.eventTime = this.editEventForm.value.eventTime;
    eventEd.ts = this.editEventForm.value.eventTs;
    console.log(eventEd);
    this.eventService.updateEvent(eventEd).subscribe(() => { });
  }
}
