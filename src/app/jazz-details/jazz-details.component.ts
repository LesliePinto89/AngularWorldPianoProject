import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-jazz-details',
  templateUrl: './jazz-details.component.html',
  styleUrls: ['./jazz-details.component.css']
})
export class JazzDetailsComponent implements OnInit {

  people;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPeople().subscribe((data) =>{
       this.people = data['people'];
    });
  }

}
