import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './Components/user';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }
  createUser(user: User): Observable<Object> {
    return this.http.post(`${this.apiServerUrl}/signup`, user);
  }
  login(user:User):Observable<Object>{
    return this.http.post(`${this.apiServerUrl}/login`,user);
  }
}
