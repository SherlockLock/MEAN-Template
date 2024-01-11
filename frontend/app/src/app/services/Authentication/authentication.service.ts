import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Router } from '@angular/router';

import { UserRoot, TokenResponse, TokenPayload, PasswordChangeTokenPayload } from '../../models/User';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthenticationService {

  private token: string;

  constructor(private http: HttpClient, private router: Router) {  }

  private getServerUrl() : string {
    return environment.apiUrl;
  }

  private saveToken(token: string): void {
    sessionStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = sessionStorage.getItem('mean-token');
    }
    return this.token;
  }

  public getTokenHeader(): string {
    return `Bearer ${this.getToken()}`;
  }

  public getUserDetails(): UserRoot {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isAdmin(): boolean {
    if (this.isLoggedIn()) {
      return this.getUserDetails().user.userProfile == 'admin';
    }
    else {
      return false;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
  
  public requestAccount(user: TokenPayload): Observable<any> {
    let base = this.http.post(this.getServerUrl() + `/request`, user);
  
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
  
    return request;
  }
  
  public login(user: TokenPayload): Observable<any> {

    let base = this.http.post(this.getServerUrl() + `/login`, user);
  
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
  
    return request;
  }

  public logout(): void {
    this.token = '';
    window.sessionStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }

  public passwordChange(token: PasswordChangeTokenPayload): Observable<any> {

    let base = this.http.put(this.getServerUrl() + `/api/v1/accounts/` + token._id, token);

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

}
