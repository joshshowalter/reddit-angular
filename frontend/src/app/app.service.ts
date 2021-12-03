import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private httpClient: HttpClient
  ) { }

  port: number = 52789;

  getBest(): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders();
    const params: HttpParams = new HttpParams();
    // const url = '/api/best';
    const url = `http://localhost:${this.port}/api/best`;
    const options = {
      headers: headers,
      params: params
    };
    return this.httpClient.get(url, options);
  }

  getPost(id: string): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders();
    let params: HttpParams = new HttpParams();
    params = params.set('id', id);
    // const url = '/api/post';
    const url = `http://localhost:${this.port}/api/post`;
    const options = {
      headers: headers,
      params: params
    };
    return this.httpClient.get(url, options);
  }

  getMore(): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders();
    const params: HttpParams = new HttpParams();
    // const url = '/api/best_more';
    const url = `http://localhost:${this.port}/api/best_more`;
    const options = {
      headers: headers,
      params: params
    };
    return this.httpClient.get(url, options);
    // this.httpClient.post(url, {}, options);
  }

  getMe(): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders();
    const params: HttpParams = new HttpParams();
    // const url = '/api/me';
    const url = `http://localhost:${this.port}/api/me`;
    const options = {
      headers: headers,
      params: params
    };
    return this.httpClient.get(url, options);
  }

  upvote(id: string): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders();
    let params: HttpParams = new HttpParams();
    params = params.set('id', id);
    // const url = '/api/upvote';
    const url = `http://localhost:${this.port}/api/upvote`;
    const options = {
      headers: headers,
      params: params
    };
    return this.httpClient.get(url, options);
  }

  downvote(id: string): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders();
    let params: HttpParams = new HttpParams();
    params = params.set('id', id);
    // const url = '/api/downvote';
    const url = `http://localhost:${this.port}/api/downvote`;
    const options = {
      headers: headers,
      params: params
    };
    return this.httpClient.get(url, options);
  }
}
