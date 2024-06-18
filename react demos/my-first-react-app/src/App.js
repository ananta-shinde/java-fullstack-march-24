import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Componets/Home';
import Signup from './Componets/Signup';
import Login from './Componets/login';

    const routers = createBrowserRouter([
              {
                path:"/",
                element:<Home/>
              },
              {
                path:"/signup",
                element:<Signup/>
              },
              {
                path:"/login",
                element:<Login/>
              }
            ])


function App() {
  return (
    <>
      <RouterProvider router={routers}/>
     </>
  );
}

export default App;
