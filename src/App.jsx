import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { productsData } from './api/Api';
import Product from './components/Product';

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
      }
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App