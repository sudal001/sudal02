import { createBrowserRouter, RouterProvider } from 'react-router'
import DefaultLayout from '@/routes/layouts/Default'
import EmptyLayout from '@/routes/layouts/Empty'
import Home from '@/routes/pages/Home'
import About from '@/routes/pages/About'
import Movies from '@/routes/pages/Movies'
import MovieDetails from '@/routes/pages/MovieDetails'
import NotFound from '@/routes/pages/NotFound'
import SignIn from '@/routes/pages/SignIn'
import { requiresAuth } from '@/routes/loaders/index'
import Todos from '@/routes/pages/Todos'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/movies',
        element: <Movies />,
        loader: requiresAuth,
        children: [
          {
            path: '/movies/:movieId',
            element: <MovieDetails />
          }
        ]
      },
      { path: '/signin', element: <SignIn /> },
      { path: '/todos', element: <Todos /> }
    ]
  },
  {
    element: <EmptyLayout />,
    children: [{ path: '*', element: <NotFound /> }]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
