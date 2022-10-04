import About from "../pages/About";
import PostsPage from "../pages/PostsPage";
import PostPage from "../pages/PostPage";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/about', element: About},
    {path: '/posts', element: PostsPage},
    {path: '/posts/:id', element: PostPage},
]

export const publicRoutes = [
    {path: '/Login', element: Login}
]