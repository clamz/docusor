import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { DocumentationComponent } from './documentation/documentation.component';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},

  { path: 'doc', component: DocumentationComponent},
  { path: '**',    component: NoContentComponent },
];
