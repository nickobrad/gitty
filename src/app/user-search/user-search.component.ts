import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllservicesService } from '../services/allservices.service';
import { Usertemplate } from '../userclass/usertemplate';
import { Repotemplate } from '../repoclass/repotemplate';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  showResults = true;

  user!: Usertemplate;
  repos!: Repotemplate[]; 
 
  constructor(
    private http: HttpClient,
    private allServices: AllservicesService 
  ) 
  { }

    lookForUser(input:string){
      this.allServices.getTheUser(input).toPromise().then(
        (response:any) => {
          this.user = response;
          this.allServices.getTheUserRepo(input).subscribe(
            (feedback:any) => {
              this.repos = feedback;
              console.log(this.repos)
            }
          )
        }, (error: any) =>{
          this.allServices.getTheUser('nickobrad');
        }
      )
    }

    // repoGet(){
    //   this.allServices.getTheUserRepo('nickobrad').subscribe(
    //     (feedback:any) => {
    //       this.repos = feedback;
    //       console.log(this.repos)
    //     }
    //   )
    // }

    toggleDisplay(){
      this.showResults = !this.showResults;
    }

  ngOnInit(): void {
  }

}
