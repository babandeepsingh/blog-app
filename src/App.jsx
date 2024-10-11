import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { databases } from './AppWriteConfig';
import { MyContext } from "./MyContext";
import Home from './Home';
import { SelectedPostContext } from './SelectedPostContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Details from './Details';
import Users from './Users';
import ErrorBoundary from './Component/ErrorBoundary';
import NotFound from './Component/Notfound';

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/details",
      element: <Details />,
    },
    {
      path: "/user/:id",
      element: <Users />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <ErrorBoundary>
      <MyContext.Provider value={{ posts, setPosts }}>
        <SelectedPostContext.Provider value={{ selectedPost, setSelectedPost }}>
          <div className='container'>
            <RouterProvider router={router} />
          </div>
        </SelectedPostContext.Provider>
      </MyContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
