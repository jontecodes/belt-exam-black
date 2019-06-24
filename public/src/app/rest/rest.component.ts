import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { observable } from 'rxjs';


@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  restaurants;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.getAllRestaurants();
  }
  getAllRestaurants(){
    let obs = this._httpService.getRestaurants();
    obs.subscribe(data => {
      this.restaurants = data['results'];
    });
  }
  destroyRest(id){
    let obs = this._httpService.deleteRestaurant(id);
    obs.subscribe(data => {
      if(data['message'] === 'Success'){
        this.getAllRestaurants();
      }
    });
  }
}
