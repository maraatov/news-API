import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./store/store";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Posts} from "./components/Posts/Posts";
import {Comments} from "./components/Commentary/Comments";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Posts/>
            },
            {
                path: "post/:id",
                element: <Comments/>
            }
        ],
    },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
      <RouterProvider router={router}/>
  </Provider>
)
