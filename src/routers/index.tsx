import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import PrivateRoute from './privateRoute';

const Layout = React.lazy(() => import('@/layout'));
const Home = React.lazy(() => import('@/pages/Home'));
const Login = React.lazy(() => import('@/pages/Login'));
const Register = React.lazy(() => import('@/pages/Register'));
const Profile = React.lazy(() => import('@/pages/Profile'));
const EditProfile = React.lazy(() => import('@/pages/Profile/Edit'));
const MovieDetails = React.lazy(() => import('@/pages/MovieDetails'));

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <React.Suspense fallback={<div>Loading...</div>}>
                <Layout>
                    <Home />
                </Layout>
            </React.Suspense>
        ),
    },
    {
        path: '/payment',
        element: <PrivateRoute element={<div>Test</div>} />,
    },
    {
        path: '/login',
        element: (
            <React.Suspense fallback={<div>Loading...</div>}>
                <Login />
            </React.Suspense>
        ),
    },
    {
        path: '/register',
        element: (
            <React.Suspense fallback={<div>Loading...</div>}>
                <Register />
            </React.Suspense>
        ),
    },
    {
        path: '/profile',
        element: (
            <React.Suspense fallback={<div>Loading...</div>}>
                <PrivateRoute
                    element={
                        <Layout>
                            <Profile />
                        </Layout>
                    }
                />
            </React.Suspense>
        ),
    },
    {
        path: '/profile/edit',
        element: (
            <React.Suspense fallback={<div>Loading...</div>}>
                <PrivateRoute
                    element={
                        <Layout>
                            <EditProfile />
                        </Layout>
                    }
                />
            </React.Suspense>
        ),
    },
    {
        path: '/movie/details',
        element: (
            <React.Suspense fallback={<div>Loading...</div>}>
                <Layout>
                    <MovieDetails />
                </Layout>
            </React.Suspense>
        ),
    },
]);

export default router;
