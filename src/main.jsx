import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddCoffee from './Components/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee.jsx';
import CoffeeDetails from './Components/CoffeeDetails/CoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/coffee')
  },
  {
    path: "/add_coffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/coffee/:id",
    element: <CoffeeDetails></CoffeeDetails>,
    loader:  ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/update_coffee",
    element: <UpdateCoffee></UpdateCoffee>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
