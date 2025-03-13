import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent:() => { 
            return import('./page/about-me/about-me.component'). then((m) => m.AboutMeComponent);
        },   
    },
];
