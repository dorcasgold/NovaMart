import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { productsData } from './api/Api';
import Product from './components/Product';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import Shop from './pages/Shop';

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: productsData,
      },
      {
        path: 'product/:id',
        element: <Product />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'signin',
        element: <SignIn />
      },
      {
        path: 'shop',
        element: <Shop />
      },
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App