import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-eventview',
  templateUrl: './eventview.component.html',
  styleUrls: ['./eventview.component.css']
})
export class EventviewComponent implements OnInit {
  eventviewId: number = 0;
  eventDetails: any;
  constructor(private eventService: EventService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.eventviewId = data['id']; 
          })

          console.log('inside viewevent');
          console.log(`event id is ${this.eventviewId}`);
          this.eventService.getEvent(this.eventviewId).subscribe(data => {
            this.eventDetails = data;
          })
         // this.memberService.getMember(this.memberviewId).subscribe(() => this.memberDetails = this.memberService.getMembers());
  }

}
