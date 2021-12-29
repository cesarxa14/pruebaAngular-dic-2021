import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUserURL     = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.get(`${this.baseUserURL}?username=${username}&password=${password}`);
  }

  register(user: string) {
    return this.http.post(`${this.baseUserURL}`, user);
  }

  getUserByUsername(username: string){
    return this.http.get(`${this.baseUserURL}?username=${username}`);
  }

}
