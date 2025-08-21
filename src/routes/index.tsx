import App from '@/App';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import ErrorPage from '@/pages/ErrorPage';
import FaqPage from '@/pages/FaqPage';
import FeaturesPage from '@/pages/FeaturesPage';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import UnauthorizePage from '@/pages/UnauthorizePage';
import { createBrowserRouter } from 'react-router';


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
    // {
    //     path: "/admin",
    //     Component: withAuth(DashboardLayout, (role.superAdmin as TRole || role.admin as TRole)),
    //     children: [
    //         { index: true, element: <Navigate to="/admin/analytics" /> },
    //         ...generateRoutes(adminSidebarItems)
    //     ]
    // },

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