import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OccasionResponse } from '../responses/occasion-response';
import { OccasionService } from '../services/occasion.service';
import MemberResponse from '../responses/member-response';
import { MemberService } from '../services/member.service';




@Component({
  selector: 'app-occasions',
  templateUrl: './occasions.component.html',
  styleUrls: ['./occasions.component.css']
})
export class OccasionsComponent implements OnInit {


  AttendeesselectedValue: string = "";
  AnchorsselectedValue: string = "";
  occasionResponse: OccasionResponse = {
    name: "",
    anchors: "",
    attendees: "",
    ts: new Date(),
    startDate: new Date(),
    id: 0
  };
  isSuccessful = false;
  isOccasionFailed = false;
  errorMessage = '';
  members: MemberResponse [] = [];

  occasions$: Observable<OccasionResponse[]> | undefined;

  constructor(private occasionService: OccasionService,
              private memberService: MemberService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {this.memberService.getMembers().subscribe(data => {
    console.log(data);
    this.members = data;
  });

  }

  addOccasion(): void {
    
    this.occasionResponse.anchors = this.AnchorsselectedValue.toString();
    this.occasionResponse.attendees = this.AttendeesselectedValue.toString();
    console.log(JSON.stringify(this.occasionResponse));
    this.occasionService.saveOccasion(this.occasionResponse).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isOccasionFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isOccasionFailed = true;
      }
    });

    
    //this.memberService.saveMember(this.form.value).subscribe(() => this.members$ = this.memberService.getMembers());
  }

  updateOccasion(occasion: OccasionResponse) {
    console.log('inside updatemember');
    console.log(`member id is ${occasion.id}`);
    occasion.name = occasion.name;
    occasion.anchors = occasion.anchors;
    occasion.attendees = occasion.attendees;
    occasion.startDate = occasion.startDate;
    this.occasionService.updateOccasion(occasion).subscribe(() => {});
  }

  removeMember(occasion: OccasionResponse) {
    console.log('inside removeMember');
    console.log(`occasion id is ${occasion.id}`);
    this.occasionService.deleteOccasion(occasion.id).subscribe(() =>this.occasions$ = this.occasionService.getOccasions());
  }

}
