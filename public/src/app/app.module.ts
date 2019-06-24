import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";


import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { RestComponent } from './rest/rest.component';
import { EditComponent } from './edit/edit.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewsNewComponent } from './reviews-new/reviews-new.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    RestComponent,
    EditComponent,
    ReviewsComponent,
    ReviewsNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [HttpService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){ }


}
