import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";
import './index.css'
import Videos from "./pages/Videos.jsx";
import VideosDetail from "./pages/VideosDetail.jsx";
import App from "./App.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {index: true, element: <Videos/>, },
            {path: '/videos', element: <Videos/>},
            {path: '/videos/:keyword', element: <Videos/>},
            {path: '/videos/watch/:id', element: <VideosDetail/>}
        ]
    },
]);
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)
