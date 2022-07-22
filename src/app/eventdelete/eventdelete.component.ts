import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-eventdelete',
  templateUrl: './eventdelete.component.html',
  styleUrls: ['./eventdelete.component.css']
})
export class EventdeleteComponent implements OnInit {

  eventdeleteId: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private eventService: EventService,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.eventdeleteId = data['id'];
    });
    if(this.eventdeleteId){
      this.eventService.deleteEvent(this.eventdeleteId).subscribe(() => { });
    }

  }

}
