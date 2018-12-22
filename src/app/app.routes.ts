import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ContactComponent} from './components/contact/contact.component';


export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactComponent }
];
