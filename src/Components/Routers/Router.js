import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
// import About from './About'
import Order from './Order'
import Navigate from './Navigate'
import NoMatch from './NoMatch'
import Products from './Products'
import FeaturedProducts from './FeaturedProducts'
import NewProducts from './NewProducts'
import Users from './Users'
import UserDetails from './UserDetails'
import Profile from './Profile'
import { Auth } from './Auth'
import Login from './Login'
const LazyAbout = React.lazy(() => import('./About'))

const Router = () => {
  return (
    <Auth>
      <Navigate />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='about' element={<About />} /> */}
        <Route path='about' element={
          <React.Suspense fallback='Loading...'>
            <LazyAbout />
          </React.Suspense>} />
        <Route path='order' element={<Order />} />
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='profile' element={<Profile />} />
        <Route path='login' element={<Login />} />
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </Auth>
  )
}

export default Router
