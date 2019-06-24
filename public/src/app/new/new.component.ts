import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newRest;
  errors = [];

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.newRest = {
      name: '',
      cuisine: ''
    };
  }

  createRestaurant(){
    this.errors = [];
    let obs = this._httpService.newRestaurant(this.newRest);
    obs.subscribe(data => {
      if(data['message'] == 'Failed'){
        this.errors.push(data['errors']['errors']);
        console.log('Pushed errors', this.errors);
      } else {
        this._router.navigate(['/restaurants']);
      }
    });
  }

}
