import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YokoService {
  private url='http://tienda-laravel.test/api';
  constructor(private http:HttpClient) { }

  signup(data){
    return this.http.post(this.url+'/signup', data)
  }

  login(data){
    return this.http.post(`${this.url}/login`, data)
  }

  sendPasswordResetLink(data){
    return this.http.post(`${this.url}/sendPasswordResetLink`, data)
  }

  changePassword(data){
    return this.http.post(`${this.url}/resetPassword`, data)
  }

}
