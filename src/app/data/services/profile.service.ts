import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, tap } from 'rxjs';
import { Profile } from '../interfaces/profile.interface';
import { SubscribersList } from '../interfaces/subscribersList.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http: HttpClient = inject(HttpClient);
  baseUrl = 'https://icherniakov.ru/yt-course/';
  me = signal<Profile | null>(null);

  constructor() {}

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.baseUrl}account/test_accounts`);
  }

  getMe() {
    return this.http.get<Profile>(`${this.baseUrl}account/me`).pipe(
      tap((res) => {
        this.me.set(res);
      })
    );
  }

  getSubscribersShortlist() {
    return this.http
      .get<SubscribersList<Profile>>(`${this.baseUrl}account/subscribers/`)
      .pipe(map((res) => res.items.slice(0, 3)));
  }
}
