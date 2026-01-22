import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO } from '../../core/portfolio';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formation.html',
  styleUrl: './formation.scss',
})
export class Formation {
  p = PORTFOLIO;
}
