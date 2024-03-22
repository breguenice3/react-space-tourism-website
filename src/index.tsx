import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Destination from './pages/destination/destination';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Crew from './pages/crew/crew';
import Technology from './pages/technology/technology';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/destination",
    element: < Destination />,
  },
  {
    path: "/crew",
    element: <Crew />
  },
  {
    path: "/technology",
    element: <Technology />

  }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);