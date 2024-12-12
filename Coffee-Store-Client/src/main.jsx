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
import { Login } from './Components/Login.jsx';
import { SignUp } from './Components/SignUp.jsx';
import { AuthProvider } from './Providers/AuthProvider.jsx';
import { Users } from './Components/Users.jsx';

import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch(`http://localhost:5000/coffee`),
    children: [
      {
        path: "/addCoffee",
        element: <Addcoffee></Addcoffee>,
      },
      {
        path:'/users',
        element:<Users></Users>
        
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>


    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
