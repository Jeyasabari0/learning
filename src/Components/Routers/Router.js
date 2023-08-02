import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
// import About from './About'
import Order from './Order'
import Navbar from './Navbar'
import NoMatch from './NoMatch'
import Products from './Products'
import FeaturedProducts from './FeaturedProducts'
import NewProducts from './NewProducts'
import Users from './Users'
import UserDetails from './UserDetails'
import Profile from './Profile'
import Login from './Login'
import RequireAuth from './RequireAuth'

const LazyAbout = React.lazy(() => import('./About'))

const Router = () => {

  return (

    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<RequireAuth><Home /></RequireAuth>} />
        <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
        {/* <Route path='about' element={<RequireAuth><About /></RequireAuth>} />  */}
        <Route path='about' element={
          <React.Suspense fallback='Loading...'>
            <RequireAuth><LazyAbout /></RequireAuth>
          </React.Suspense>} />
        <Route path='order' element={<Order />} />
        <Route path='products' element={<RequireAuth><Products /></RequireAuth>}>
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default Router
