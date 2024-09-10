import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import 'react-day-picker/style.css';
import 'swiper/css';
import 'swiper/css/navigation';

import './index.css';
import router from './routers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />);

reportWebVitals();
