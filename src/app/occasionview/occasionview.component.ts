import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import MemberResponse from '../responses/member-response';
import { MemberService } from '../services/member.service';
import { OccasionService } from '../services/occasion.service';

@Component({
  selector: 'app-occasionview',
  templateUrl: './occasionview.component.html',
  styleUrls: ['./occasionview.component.css']
})
export class OccasionviewComponent implements OnInit {

  occasionviewId: number = 0;
  occasionDetails: any;
  constructor(private occasionService: OccasionService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.occasionviewId = data['id']; 
          })

          console.log('inside viewmember');
          console.log(`task id is ${this.occasionviewId}`);
          this.occasionService.getOccasion(this.occasionviewId).subscribe(data => {
            this.occasionDetails = data;
          })
         // this.memberService.getMember(this.memberviewId).subscribe(() => this.memberDetails = this.memberService.getMembers());
  }

}
