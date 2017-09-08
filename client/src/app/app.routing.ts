import { ModuleWithProviders } from '@angular/core';

import { Routes , RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

const appRoutes :Routes = [
	{ path : '' , component : LoginComponent},
	{ path : 'register' , component : RegisterComponent},
	{ path : 'home' , component : HomeComponent},
	{ path : 'home/:userid' , component : HomeComponent},
	{ path : '**' , component : NotfoundComponent}
];

export const appRouting :ModuleWithProviders = RouterModule.forRoot(appRoutes);