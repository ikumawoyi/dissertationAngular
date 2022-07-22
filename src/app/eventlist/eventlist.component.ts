import { Component, OnInit } from '@angular/core';
import { EventResponse } from '../responses/event-response';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {
  listEvents: EventResponse[] = [];


  constructor(private eventService: EventService) { }


  displayedColumns : any[] = ['name','email'];

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(data => {
      console.log(data);
      this.listEvents = data;
    });
  }

}
