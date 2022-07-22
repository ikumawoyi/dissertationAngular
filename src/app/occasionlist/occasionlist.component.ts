import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import MemberResponse from '../responses/member-response';
import { OccasionResponse } from '../responses/occasion-response';
import { MemberService } from '../services/member.service';
import { OccasionService } from '../services/occasion.service';

@Component({
  selector: 'app-occasionlist',
  templateUrl: './occasionlist.component.html',
  styleUrls: ['./occasionlist.component.css']
})
export class OccasionlistComponent implements OnInit {

  listOccasions: OccasionResponse[] = [];


  constructor(private occasionService: OccasionService) { }


  displayedColumns : any[] = ['name','email'];

  ngOnInit(): void {
    this.occasionService.getOccasions().subscribe(data => {
      console.log(data);
      this.listOccasions = data;
    });
  }

}
