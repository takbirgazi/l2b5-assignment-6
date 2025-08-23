import App from '@/App';
import { role } from '@/assets/constants/role';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import ErrorPage from '@/pages/ErrorPage';
import FaqPage from '@/pages/FaqPage';
import FeaturesPage from '@/pages/FeaturesPage';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import UnauthorizePage from '@/pages/UnauthorizePage';
import type { TRole } from '@/types';
import { generateRoutes } from '@/utils/generateRoutes';
import { withAuth } from '@/utils/withAuth';
import { createBrowserRouter, Navigate } from 'react-router';
import { adminSidebarItems } from './adminSidebarItems';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { userSidebarItems } from './userSidebarItems';
import { agentSidebarItems } from './agentSidebarItems';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                Component: HomePage
            }
            ,
            {
                path: "about",
                Component: AboutPage
            },
            {
                path: "features",
                Component: FeaturesPage
            },
            {
                path: "contact",
                Component: ContactPage
            },
            {
                path: "faq",
                Component: FaqPage
            }
        ]
    },

    // For Admin Routes 
    {
        path: "/admin",
        Component: withAuth(DashboardLayout, (role.superAdmin as TRole || role.admin as TRole)),
        children: [
            { index: true, element: <Navigate to="/admin/analytics" /> },
            ...generateRoutes(adminSidebarItems)
        ]
    },
    // For User Routes 
    {
        path: "/agent",
        Component: withAuth(DashboardLayout, (role.agent as TRole)),
        children: [
            { index: true, element: <Navigate to="/agent/analytics" /> },
            ...generateRoutes(agentSidebarItems)
        ]
    },
    // For User Routes 
    {
        path: "/user",
        Component: withAuth(DashboardLayout, (role.user as TRole)),
        children: [
            { index: true, element: <Navigate to="/user/analytics" /> },
            ...generateRoutes(userSidebarItems)
        ]
    },

    // Out Of App
    {
        path: "/login",
        Component: LoginPage
    },
    {
        path: "/signup",
        Component: SignUpPage
    },
    {
        path: "/unauthorize",
        Component: UnauthorizePage
    }
]);