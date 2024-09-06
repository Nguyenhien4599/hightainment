import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

import './index.css';
import router from './routers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />);

reportWebVitals();
