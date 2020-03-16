import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${environment.api_url}${url}`, { params });
  }

  post<T, D>(url: string, data: D): Observable<T> {
    return this.http.post<T>(
      `${environment.api_url}${url}`,
      JSON.stringify(data),
      { headers: this.headers }
    );
  }

  put<T, D>(url: string, data: D): Observable<T> {
    return this.http.put<T>(
      `${environment.api_url}${url}`,
      JSON.stringify(data),
      { headers: this.headers }
    );
  }

  delete<T, D>(url: string, data: D): Observable<T> {
    return this.http.delete<T>(`${environment.api_url}${url}`, {
      headers: this.headers
    });
  }

  get headers(): HttpHeaders {
    const headerConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
    return new HttpHeaders(headerConfig);
  }
}
