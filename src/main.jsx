import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Details from './Details.jsx';
import { MyContext } from './MyContext.js';
import { SelectedPostContext } from './SelectedPostContext.js';
import Users from './Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/user/:id",
    element: <Users />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MyContext.Provider value={{ posts, setPosts }}>
      <SelectedPostContext.Provider value={{ selectedPost, setSelectedPost }}> */}
      {/* <RouterProvider router={router} /> */}
    {/* </SelectedPostContext.Provider>
    </MyContext.Provider> */}
    <App />

  </StrictMode>,
)
