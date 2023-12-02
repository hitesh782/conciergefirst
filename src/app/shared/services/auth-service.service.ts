import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isAuthnticated: boolean = false;

  private auth0 = new auth0.WebAuth({
    clientID: "R61gDUHdfC6gfGtzCV2IPR72j9VPIBkM",
    domain: "dev-raff3lhzvccgz05a.us.auth0.com",
    responseType: 'token id_token',
    redirectUri: "http://localhost:4200",
    scope: 'openid profile email'
  });

  constructor() { }

  public login(): void {
    console.log('inside login');
    this.auth0.authorize();
    // this.isAuthnticated = true;
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        // Save tokens and user info in localStorage or wherever you prefer
        // Handle successful authentication
        this.setSession(authResult);
      } else if (err) {
        // Handle authentication error
        console.log('error in login process');
      }
    });
  }

  private setSession(authResult: auth0.Auth0DecodedHash): void {
    const expiresAt = JSON.stringify((authResult.expiresIn || 0) * 1000 + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken || '');
    localStorage.setItem('id_token', authResult.idToken || '');
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Clear tokens from localStorage or session storage
    // Redirect to logout URL
    // Optional: navigate to home or a specific route after logout
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isAuthenticated(): boolean {
    // Check if tokens are present and not expired
    // Return true/false accordingly
    // return false;
    // return this.isAuthnticated;
    // return true;
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  public getAccessToken(): string | null {
    console.log('inside get access token function');
    return localStorage.getItem('access_token');
  }
}
