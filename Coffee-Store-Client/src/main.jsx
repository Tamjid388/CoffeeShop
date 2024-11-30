import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Addcoffee } from './Components/Addcoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  },
  {
    path: "/addCoffee",
    element:<Addcoffee></Addcoffee>,
  },
  {
    path: "/updateCoffee",
    element:<UpdateCoffee></UpdateCoffee>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)