import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent:() => { 
            return import('./page/about-me/about-me.component'). then((m) => m.AboutMeComponent);
        },   
    },
    {
        path: 'progress',
        loadComponent:() => { 
            return import('./page/about-me/about-me.component'). then((m) => m.AboutMeComponent);
        },   
    },
    {
        path: 'topic-test',
        loadComponent:() => { 
            return import('./pages/project-details/project-details.component'). then((m) => m.ProjectDetailsComponent);
        },   
    },
    {
        path: 'data-entry',
        loadComponent:() => { 
            return import('./pages/projects/data-entry/data-entry.component'). then((m) => m.DataEntryComponent);
        },   
    },
];
