import App from '@/App';
import AboutPage from '@/pages/AboutPage';
import ErrorPage from '@/pages/ErrorPage';
import HomePage from '@/pages/HomePage';
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
    // {
    //     path: "/login",
    //     Component: Login
    // },
    // {
    //     path: "/signup",
    //     Component: SignUp
    // },
    // {
    //     path: "/verify",
    //     Component: Verify
    // },
    // {
    //     path: "/unauthorize",
    //     Component: Unauthorize
    // }
]);