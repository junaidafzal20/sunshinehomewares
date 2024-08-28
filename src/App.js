import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';  // Import the Home component
import Product from './Pages/Product';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />  {/* Now Home is defined */}
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
