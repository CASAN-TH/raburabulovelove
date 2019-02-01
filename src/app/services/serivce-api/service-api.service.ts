
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor(
    public http: HttpClient
  ) { }

  saveUser(body) {
    return this.http.post(environment.apiUrl + '/api/auth/signin', body).toPromise()
  }

  sigup(body){
    return this.http.post(environment.apiUrl + '/api/auth/signup', body).toPromise()

  }
  
  getProd() {
    return this.http.get(environment.apiUrl + '/api/productsrabu').toPromise()
  }

  getProdById(_id) {
    return this.http.get(environment.apiUrl + '/api/productsrabu/' + _id).toPromise()
  }

















}
