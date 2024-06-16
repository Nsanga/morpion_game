import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScoresComponent } from './scores/scores.component';

// Define the routes for the application
export const routes: Routes = [
  { path: '', component: HomeComponent },       // Route for the home page
  { path: 'scores', component: ScoresComponent } // Route for the scores page
];
