import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../data/services/profile.service';
import { SubscriberCardComponent } from './subscriber-card/subscriber-card.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [SubscriberCardComponent, RouterLink, AsyncPipe],
})
export class SidebarComponent {
  profileService: ProfileService = inject(ProfileService);

  subscribers$ = this.profileService.getSubscribersShortlist();

  menuItems = [
    { id: 1, label: 'Home', icon: 'home', link: '' },
    { id: 2, label: 'Chats', icon: 'chat', link: '' },
    { id: 3, label: 'Search', icon: 'search', link: 'search' },
  ];
}
