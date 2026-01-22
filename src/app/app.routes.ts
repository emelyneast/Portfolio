import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Experience } from './pages/experience/experience';
import { Contact } from './pages/contact/contact';
import { Formation } from './pages/formation/formation';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'a-propos', component: About},
  { path: 'projets', component: Projects},
  { path: 'experience', component: Experience},
  { path: 'formation', component: Formation},
  { path: 'contact', component: Contact},
  { path: '**', redirectTo: '' },
];
