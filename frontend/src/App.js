import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreens';
import CartScreen from './Screens/CartScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ProfileScreen from './Screens/ProfileScreen';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderScreen from './Screens/OrderScreen';
import UserListScreen from './Screens/UserListScreen';
import UserEditScreen from './Screens/UserEditScreen';
import ProductListScreen from './Screens/ProductListScreen';
import ProductEditScreen from './Screens/ProductEditScreen';
import OrderListScreen from './Screens/OrderListScreen';

function App() {
  return (
    //wrap entire application with Router
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          {/* Routes wrap all of the Route components */}
          <Routes>
            {/* Route component define a path to a different page in the website*/}
            {/* When going to a route, only THIS SECTION IN THE JSX CHANGES */}
            <Route path='/order/:id' element={<OrderScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} exact />
            {/* the question mark on the params makes it optional */}
            <Route path='/cart/:id' element={<CartScreen />} />
            <Route path='/cart' element={<CartScreen />} />
            <Route path='/admin/userlist' element={<UserListScreen />} />
            <Route
              path='/admin/productlist'
              element={<ProductListScreen />}
              exact
            />
            <Route
              path='/admin/productlist/:pageNumber'
              element={<ProductListScreen />}
              exact
            />
            <Route path='/admin/orderlist' element={<OrderListScreen />} />
            <Route
              path='/admin/product/:id/edit'
              element={<ProductEditScreen />}
            />
            <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
            <Route path='/search/:keyword' element={<HomeScreen />} exact />
            <Route path='/page/:pageNumber' element={<HomeScreen />} exact />
            <Route
              path='/search/:keyword/:page/:pageNumber'
              element={<HomeScreen />}
              exact
            />
            <Route path='/' element={<HomeScreen />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
