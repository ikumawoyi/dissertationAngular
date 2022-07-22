import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import MemberResponse from '../responses/member-response';
import { OccasionResponse } from '../responses/occasion-response';
import { MemberService } from '../services/member.service';
import { OccasionService } from '../services/occasion.service';


@Component({
  selector: 'app-occasionedit',
  templateUrl: './occasionedit.component.html',
  styleUrls: ['./occasionedit.component.css']
})
export class OccasioneditComponent implements OnInit {
  occasionEditId: number = 0;
  dataLoaded: boolean = false
  occasionDetails: any;
  editOccasionForm: FormGroup = new FormGroup({});
  AttendeesselectedValue: string = "";
  AnchorsselectedValue: string = "";
  members: MemberResponse [] = [];
  constructor(private activatedRoute: ActivatedRoute,
    private occasionService: OccasionService,
    private memberService: MemberService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.memberService.getMembers().subscribe(data => {
      console.log(data);
      this.members = data;
    });

    this.dataLoaded = false;
    this.activatedRoute.params.subscribe(data => {
      this.occasionEditId = data['id'];
    });

    if(this.occasionEditId !== 0){
      this.occasionService.getOccasion(this.occasionEditId)
      .subscribe(data => {
        this.occasionDetails = data;
        console.log(this.occasionDetails);
        //Object.assign(this.homeDetails, data);


        this.editOccasionForm = this.formBuilder.group({
          'occasionId': new FormControl(this.occasionDetails.id),
          'occasionName': new FormControl(this.occasionDetails.name),
          'occasionAnchors': new FormControl(this.occasionDetails.anchors),
          'occasionAttendees': new FormControl(this.occasionDetails.attendees),
          'stateDate': new FormControl(this.occasionDetails.startDate),
          'occasionTs': new Date(),
        })
        this.dataLoaded = true;
      })
    }
  }
  updateOccasion(occasionEd: OccasionResponse){
    occasionEd.anchors = this.AnchorsselectedValue.toString();
    occasionEd.attendees = this.AttendeesselectedValue.toString();
    occasionEd.id = this.editOccasionForm.value.occasionId;
    occasionEd.name = this.editOccasionForm.value.occasionName;
    occasionEd.anchors = this.editOccasionForm.value.occasionAnchors;
    occasionEd.attendees = this.editOccasionForm.value.occasionAttendees;
    occasionEd.startDate = this.editOccasionForm.value.stateDate;
    occasionEd.ts = this.editOccasionForm.value.occasionTs;
    console.log(occasionEd);
    this.occasionService.updateOccasion(occasionEd).subscribe(() => { });
    
    this.router.navigate(['memberlist']);
  }
}
