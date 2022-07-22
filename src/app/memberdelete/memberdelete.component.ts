import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-memberdelete',
  templateUrl: './memberdelete.component.html',
  styleUrls: ['./memberdelete.component.css']
})
export class MemberdeleteComponent implements OnInit {

  memberdeleteId: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private memberService: MemberService,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.memberdeleteId = data['id'];
    });
    if(this.memberdeleteId){
      this.memberService.deleteMember(this.memberdeleteId).subscribe(() => { });
    }

  }

}
