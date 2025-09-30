import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
    // Main (/home)
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                loadChildren: () =>
                    import('./features/landing/landing.routes').then(
                        (m) => m.LANDING_ROUTES
                    ),
            },
        ],
    },
    // Info (/info/:slug, /info/help)
    // Public Paths: For all users
    {
        path: 'info',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./features/info/info.routes').then(
                        (m) => m.INFO_ROUTES
                    ),
            }
        ]
    },
];
