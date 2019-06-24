import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getRestaurants(){
    return this._http.get('/restaurant');
  }
  newRestaurant(newRestaurant){
    return this._http.post('/create', newRestaurant);
  }
  updateRest(rest){
    return this._http.put(`/update/restaurant/${rest._id}`, rest);
  }
  getOneRest(id){
    return this._http.get(`/restaurant/${id}`);
  }
  getReviews(id){
    return this._http.get(`/reviews/${id}`);
  }
  addReview(review, id){
    return this._http.post(`/create-review/${id}`, review);
  }
  deleteRestaurant(id){
    return this._http.delete(`/destroy/restaurant/${id}`)
  }

}
