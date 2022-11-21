import React from "react";
import './App.css';
import HomePage from "./pages/Homepage/homepage.component";
import {  Switch, Route } from "react-router-dom";
import ShopPage from "./pages/Shop-page/shop.component";
import Header from "./Components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page-component";
 
function App() {
  return(
    <div>
      <Header />
       <Switch>        
          <Route exact path= '/' component= { HomePage } /> 
          <Route path= '/shop' component= { ShopPage } />
          <Route path= '/signin' component = { SignInAndSignUpPage } />
      </Switch> 
    </div>
  );
}
export default App;

