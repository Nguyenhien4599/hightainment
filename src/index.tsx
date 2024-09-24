import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'swiper/css';
import 'swiper/css/navigation';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import router from './routers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <RouterProvider router={router} />
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    </>,
);

reportWebVitals();
