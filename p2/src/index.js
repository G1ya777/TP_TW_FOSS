import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/style.scss"
import Login from './components/login.js'
import Register from './components/register.js'
import Home from './components/home.js'
import Products from './components/Products';
import Load from './components/other/load';
import Function404 from './components/other/function404';
import ProtectedRoute from './components/other/ProtectedRoute';
import React from 'react';
import LoggedInRoute from './components/other/loggedInRoute';
import Settings from './components/other/settings';
import Header from './components/header';
import Footer from './components/footer';
import Cart from './components/other/Cart';
const root = ReactDOM.createRoot(document.getElementById('root'));




function App() {

  const element = (


    <div>
      <Router>

        <Routes>
          <Route path='/' element={<div><Header/>< Home /><Footer /></div>}></Route>
          <Route exact path='/home' element={<div><Header name={"test"} isLoggedInProp={false} />< Home /><Footer /></div>}></Route>
          <Route
            path="/products"
            element={
              <ProtectedRoute >
                <div><Header />< Products/></div>
              </ProtectedRoute>
            } />
            <Route
            path="/cart"
            element={
              <ProtectedRoute >
                <Cart/>
              </ProtectedRoute>
            } />
          <Route
            path="/login"
            element={
              <LoggedInRoute >
                <div><Header />< Login /><Footer /></div>
              </LoggedInRoute>
            } />
          <Route
            path="/register"
            element={
              <LoggedInRoute >
                <div><Header />< Register /><Footer /></div>
              </LoggedInRoute>
            } />
          {/* <Route path='/login' element={< Login />}></Route> */}
          <Route path='/register' element={< Register />}></Route>
          <Route path='/settings' element={< Settings />}></Route>
          <Route path="*" element={<Function404 />}> </Route>
          <Route path='/contact' element={<Load />}></Route>
          <Route path='/privacy' element={<Load />}></Route>
          <Route path='/license' element={<Load />}> </Route>
        </Routes>
      </Router >
    </div>
  )
  root.render(element);

}
App();
