import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  revRest;
  restID;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.revRest = {
      name: '',
      cuisine: '',
      reviews: []
    };

    this._route.params.subscribe((params: Params) => {
      this.restID = params['id'];
    });
    this.getThisRest(this.restID);


  }
  getThisRest(id){
    let obs = this._httpService.getOneRest(id);
    obs.subscribe(data => {
      this.revRest = data['result'];
    });
  }

}
