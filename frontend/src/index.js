import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import Spinner from "./components/Spinner";
import registerServiceWorker from './registerServiceWorker';

const App = React.lazy(() => import('./App'));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Suspense fallback={<Spinner />}>
      <App />
  </Suspense>
);

registerServiceWorker();
