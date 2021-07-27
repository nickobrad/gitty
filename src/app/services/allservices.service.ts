import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AllservicesService {

  constructor(private http:HttpClient) { 
    
  }

  getTheUser(inputValue: string){
    return this.http.get(`https://api.github.com/users/${inputValue}`);
  }

  getTheUserRepo(inputValue: string){
    return this.http.get(`https://api.github.com/users/${inputValue}/repos`);
  }

  searchForRepository(inputValue: string){
    return this.http.get(` https://api.github.com/search/repositories?q=${inputValue}`);
  }
}
