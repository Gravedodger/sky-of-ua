import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import reportWebVitals from './reportWebVitals';
import Spinner from "./components/Spinner";
import { Provider } from "react-redux";
import { store } from "./client/auth/store/store";

const App = React.lazy(() => import('./App'));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Suspense fallback={<Spinner />}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
);

reportWebVitals();
