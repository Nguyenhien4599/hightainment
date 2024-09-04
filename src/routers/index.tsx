import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import PrivateRoute from './privateRoute';

const Layout = React.lazy(() => import('../layout'));
const Home = React.lazy(() => import('../pages/Home'));

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
]);

export default router;
