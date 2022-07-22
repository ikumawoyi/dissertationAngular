import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberService } from '../services/member.service';
import MemberResponse from '../responses/member-response';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  memberResponse: MemberResponse = {
    email: "",
    address: "",
    phoneNumber: "",
    name: "",
    ts: new Date(),
    dateOfBirth: new Date(),
    id: 0
  };
  isSuccessful = false;
  isMemberFailed = false;
  errorMessage = '';

  

  members$: Observable<MemberResponse[]> | undefined;

  constructor(private memberService: MemberService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   // this.members$ = this.memberService.getMembers();


  }

  addMember(): void {
    console.log(JSON.stringify(this.memberResponse));
    this.memberService.saveMember(this.memberResponse).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isMemberFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isMemberFailed = true;
      }
    });

    
    //this.memberService.saveMember(this.form.value).subscribe(() => this.members$ = this.memberService.getMembers());
  }

  updateMember(member: MemberResponse) {
    console.log('inside updatemember');
    console.log(`member id is ${member.id}`);
    member.address = member.address;
    member.email = member.email;
    member.name = member.name;
    member.phoneNumber = member.phoneNumber;
    this.memberService.updateMember(member).subscribe(() => {});
  }

  removeMember(member: MemberResponse) {
    console.log('inside removeMember');
    console.log(`member id is ${member.id}`);
    this.memberService.deleteMember(member.id).subscribe(() =>this.members$ = this.memberService.getMembers());
  }

}
