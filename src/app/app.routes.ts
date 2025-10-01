import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { publicGuard } from './core/guards/public.guard';
import { authGuard } from './core/guards/auth.guard';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

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
    // Authentication (/login, /register)
    // Public Paths: Only for not authenticated users
    {
        path: 'auth',
        component: MainLayoutComponent,
        canActivate: [publicGuard],
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./features/auth/auth.routes').then(
                        (m) => m.AUTH_ROUTES
                    ),
            },
        ],
    },
    // Dashboard (/client, /specialist)
    // Private Paths: Only for authenticated users
    {
        path: 'dashboard',
        component: DashboardLayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./features/dashboard/dashboard.routes').then(
                        (m) => m.DASHBOARD_ROUTES
                    ),
            },
        ],
    },
];
