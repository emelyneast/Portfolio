import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO } from '../../core/portfolio';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  p = PORTFOLIO;
}
