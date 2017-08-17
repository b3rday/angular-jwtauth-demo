import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [] },
    { path: 'login', component: AuthComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);