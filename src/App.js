import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Product from './Pages/Product';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Switch>
        <Route path="/product" component={Product} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/why-choose-us" component={WhyChooseUs} />
        <Route path="/contact-us" component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
