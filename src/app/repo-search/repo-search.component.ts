import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllservicesService } from '../services/allservices.service';
import { Usertemplate } from '../userclass/usertemplate';
import { Repotemplate } from '../repoclass/repotemplate';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {
  showResults = true;

  user!: Usertemplate;
  repos: any [] = [];
 
  constructor(
    private http: HttpClient,
    private allServices: AllservicesService 
  ) 
  { }

    lookForRepo(input:string){
      this.allServices.searchForRepository(input).toPromise().then(
        (response:any) => {
          this.repos = response.items;
          console.log(response)
          
        }, (error: any) =>{
          this.allServices.getTheUser('nickobrad');
        }
      )
    }

    toggleDisplay(){
      this.showResults = !this.showResults;
    }

  ngOnInit(): void {
  }

}
