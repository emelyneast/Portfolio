import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO } from '../../core/portfolio';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  p = PORTFOLIO;
}
