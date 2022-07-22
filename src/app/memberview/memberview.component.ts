import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import MemberResponse from '../responses/member-response';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-memberview',
  templateUrl: './memberview.component.html',
  styleUrls: ['./memberview.component.css']
})
export class MemberviewComponent implements OnInit {

  memberviewId: number = 0;
  memberDetails: any;
  constructor(private memberService: MemberService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.memberviewId = data['id']; 
          })

          console.log('inside viewmember');
          console.log(`task id is ${this.memberviewId}`);
          this.memberService.getMember(this.memberviewId).subscribe(data => {
            this.memberDetails = data;
          })
         // this.memberService.getMember(this.memberviewId).subscribe(() => this.memberDetails = this.memberService.getMembers());
  }

}
