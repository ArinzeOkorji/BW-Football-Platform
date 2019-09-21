import {Routes} from '@angular/router';

import { AppComponent } from './app.component';

export const appRouter: Routes = [
  { path: 'table', loadChildren: './table/table.module#TableModule'},
];
