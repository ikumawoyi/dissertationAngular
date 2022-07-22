import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OccasionService } from '../services/occasion.service';

@Component({
  selector: 'app-occasiondelete',
  templateUrl: './occasiondelete.component.html',
  styleUrls: ['./occasiondelete.component.css']
})
export class OccasiondeleteComponent implements OnInit {

  occasiondeleteId: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private occasionService: OccasionService,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.occasiondeleteId = data['id'];
    });
    if(this.occasiondeleteId){
      this.occasionService.deleteOccasion(this.occasiondeleteId).subscribe(() => { });
    }

  }

}
