import { Component, inject } from '@angular/core';
import { Profile } from './data/interfaces/profile.interface';
import { ProfileService } from './data/services/profile.service';
import { ProfileCardComponent } from './shared-components/profile-card/profile-card.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tik-talk';

  profileService: ProfileService = inject(ProfileService);
  profiles: Profile[] = [];

  constructor() {
    this.profileService.getTestAccounts().subscribe((val) => {
      this.profiles = val;
    });
  }
}
