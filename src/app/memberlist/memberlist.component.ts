import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import MemberResponse from '../responses/member-response';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {

  listMembers: MemberResponse[] = [];


  constructor(private memberService: MemberService) { }


  displayedColumns : any[] = ['name','email'];

  ngOnInit(): void {
    this.memberService.getMembers().subscribe(data => {
      console.log(data);
      this.listMembers = data;
    });
  }

}
