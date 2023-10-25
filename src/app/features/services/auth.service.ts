import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  MAIN_URL = 'http://localhost:3000';
  JWT_TOKEN = 'accessToken';

  constructor(private httpHandler: HttpClient, private router: Router) {}

  login(loginData: { email: string; password: string }) {
    return this.httpHandler.post(`${this.MAIN_URL}/user/auth`, loginData);
  }

  addAccessToken(token: string) {
    localStorage.setItem(this.JWT_TOKEN, token);
  }

  clearTokens() {
    localStorage.clear();
  }

  getParseAccessToken() {
    const token = this.getAccessToken();
    if (!token) return;
    return this.parseJwt(token);
  }

  logOut() {
    this.clearTokens();
    this.router.navigate(['/']);
  }

  private getAccessToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private parseJwt(token: string) {
    try {
      return JSON.parse(window.atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  }
}
