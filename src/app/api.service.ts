import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  
 public getPeople(){
  return this.httpClient.get(`https://linkedjazz.org/api/people/all\\\\`);
 }
}
