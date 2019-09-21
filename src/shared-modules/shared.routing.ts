import {Routes} from '@angular/router';


export const sharedRouter: Routes = [
  { path: 'table', loadChildren: 'src/app/table/table.module#TableModule'},
];
