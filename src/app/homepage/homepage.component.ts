import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { HttpClient } from '@angular/common/http';
import { Usertemplate } from '../userclass/usertemplate';
import { Repotemplate } from '../repoclass/repotemplate';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  user!:Usertemplate;
  repos: Repotemplate []= [];

  constructor(
    private allServices: AllservicesService,
    private http:HttpClient
  ) { 
  }
  
  ngOnInit() {
    //This gets the my User details
    let promise:any = new Promise <void>((resolve,reject)=>{
      this.allServices.getTheUser('nickobrad').toPromise().then(
        (response:any) => {
        this.user = response;

        this.allServices.getTheUserRepo('nickobrad').subscribe(
          (getback:any) => {
            this.repos = getback;
            console.log(this.repos);
          }
        )
        resolve()
      },
      (error:string) => {

      })
      return promise
    })
  }

}
