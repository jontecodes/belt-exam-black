import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-reviews-new',
  templateUrl: './reviews-new.component.html',
  styleUrls: ['./reviews-new.component.css']
})
export class ReviewsNewComponent implements OnInit {
  revRest;
  myRest;
  restID;
  errors = [];

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.myRest = {
      name: ''
    };
    this.revRest = {
      customer: '',
      rating: 1,
      description: ''
    };

    this._route.params.subscribe((params: Params) => {
      this.restID = params['id'];
    });
    this.getThisRest(this.restID);
  }

  getThisRest(id){
    let obs = this._httpService.getOneRest(id);
    obs.subscribe(data => {
      this.myRest = data['result'];
    });
  }
  createReview(){
    this.errors = [];
    let obs = this._httpService.addReview(this.revRest, this.restID);
    obs.subscribe(data => {
      if(data['message'] === 'Failed'){
        console.log(data);
        this.errors.push(data['errors']['errors']['customer']);
        this.errors.push(data['errors']['errors']['description']);
        console.log('Pushed your errors:', this.errors);
      } else {
        this._router.navigate([`/restaurants/${this.restID}`]);
      }
    })
  }

}
