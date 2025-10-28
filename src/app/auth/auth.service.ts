import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http: HttpClient = inject(HttpClient);
  baseUrl = 'https://icherniakov.ru/yt-course/auth/';

  login(payload: { username: string; password: string }) {
    const fd: FormData = new FormData();
    fd.append('username', payload.username);
    fd.append('password', payload.password);
    return this.http.post(`${this.baseUrl}token`, fd);
  }
}
