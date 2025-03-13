import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent:() => { 
            return import('./page/messages/building/building.component'). then((m) => m.BuildingComponent);
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
];
