import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  editRest;
  restID;
  errors = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.editRest = {
      name: "",
      cuisine: ""
    };
    this._route.params.subscribe((params: Params) => {
      this.restID = params['id'];
    });
    this.getThisRest(this.restID);
  }
  getThisRest(id){
    let obs = this._httpService.getOneRest(id);
    obs.subscribe(data => {
      this.editRest = data['result'];
    });
  }

  updatedRest(){
    this.errors = [];
    let obs = this._httpService.updateRest(this.editRest);
    obs.subscribe(data => {
      if(data['message'] === 'Failed'){
        this.errors.push(data['errors']['errors']);
      } else {
        this._router.navigate(['/restaurants']);
      }
    });
  }
}
