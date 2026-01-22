import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO } from '../../core/portfolio';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  p = PORTFOLIO;
}
