import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { ResultPageComponent } from './result-page/result-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SearchFormComponent
  },
  {
    path: 'result',
    component: ResultPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
