import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import MemberResponse from '../responses/member-response';
import { MemberService } from '../services/member.service';


@Component({
  selector: 'app-memberedit',
  templateUrl: './memberedit.component.html',
  styleUrls: ['./memberedit.component.css']
})
export class MembereditComponent implements OnInit {
  memberEditId: number = 0;
  dataLoaded: boolean = false
  memberDetails: any;
  editMemberForm: FormGroup = new FormGroup({});

  constructor(private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.dataLoaded = false;
    this.activatedRoute.params.subscribe(data => {
      this.memberEditId = data['id'];
    });

    if(this.memberEditId !== 0){
      this.memberService.getMember(this.memberEditId)
      .subscribe(data => {
        this.memberDetails = data;
        console.log(this.memberDetails);
        //Object.assign(this.homeDetails, data);


        this.editMemberForm = this.formBuilder.group({
          'memberId': new FormControl(this.memberDetails.id),
          'memberName': new FormControl(this.memberDetails.name),
          'memberAddress': new FormControl(this.memberDetails.address),
          'memberPhoneNumber': new FormControl(this.memberDetails.phoneNumber),
          'memberEmail': new FormControl(this.memberDetails.email),
          'dateOfBirth': new FormControl(this.memberDetails.dateOfBirth),
          'memberTs': new Date(),
        })
        this.dataLoaded = true;
      })
    }
  }
  updateMember(memberEd: MemberResponse){
    memberEd.id = this.editMemberForm.value.memberId;
    memberEd.address = this.editMemberForm.value.memberAddress;
    memberEd.email = this.editMemberForm.value.memberEmail;
    memberEd.name = this.editMemberForm.value.memberName;
    memberEd.phoneNumber = this.editMemberForm.value.memberPhoneNumber;
    memberEd.dateOfBirth = this.editMemberForm.value.dateOfBirth;
    memberEd.ts = this.editMemberForm.value.memberTs;
    console.log(memberEd);
    this.memberService.updateMember(memberEd).subscribe(() => { });
    this.router.navigate(['memberlist']);
  }
  
}
