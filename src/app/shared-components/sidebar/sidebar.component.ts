import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ProfileService } from '../../data/services/profile.service';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';
import { SubscriberCardComponent } from './subscriber-card/subscriber-card.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [SubscriberCardComponent, RouterLink, AsyncPipe, ImgUrlPipe],
})
export class SidebarComponent {
  profileService: ProfileService = inject(ProfileService);
  me = this.profileService.me;

  subscribers$ = this.profileService.getSubscribersShortlist();

  menuItems = [
    { id: 1, label: 'Home', icon: 'home', link: '' },
    { id: 2, label: 'Chats', icon: 'chat', link: '' },
    { id: 3, label: 'Search', icon: 'search', link: 'search' },
  ];

  ngOnInit() {
    firstValueFrom(this.profileService.getMe());
  }
}
