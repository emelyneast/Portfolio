import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO } from '../../core/portfolio';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  p = PORTFOLIO;

  mailto() {
    const email = this.p.profile.email;
    return `mailto:${email}?subject=Contact%20Portfolio&body=Bonjour%20Emelyne,`;
  }
}
