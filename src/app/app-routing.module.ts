import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { UserSearchComponent } from './user-search/user-search.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'user-search', component: UserSearchComponent },
  { path: 'repo-search', component: RepoSearchComponent},
  // { path: '', redirectTo:"homepage", pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
