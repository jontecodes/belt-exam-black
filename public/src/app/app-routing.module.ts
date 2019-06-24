import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { AppComponent } from './app.component';
import { RestComponent } from './rest/rest.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewsNewComponent } from './reviews-new/reviews-new.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: 'restaurants', component: RestComponent},
  {path: 'restaurants/new', component: NewComponent},
  {path: 'restaurants/:id', component: ReviewsComponent},
  {path: 'restaurants/:id/review', component: ReviewsNewComponent},
  {path: 'restaurants/:id/edit', component: EditComponent},
  {path: '', pathMatch: 'full', redirectTo: '/restaurants'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
