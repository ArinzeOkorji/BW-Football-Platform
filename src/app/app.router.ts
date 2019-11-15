import {Routes} from '@angular/router';

import { AppComponent } from './app.component';

export const appRouter: Routes = [
  { path: 'table', loadChildren: './table-section/table-section.module#TableSectionModule'},
  { path: '', redirectTo: 'table', pathMatch:'full'}
];
