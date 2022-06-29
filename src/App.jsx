import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

import './App.css';

// Components
import Navbar from './components/header/Header';
import Footer from './components/footer/Footer';

// Pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import News from './pages/news/News';
import Contact from './pages/contact/Contact';
import Detail from './pages/detail/Detail';

const App = () => {

  return (
    <Router>
      <>
      <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/news" component={News} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/contact" component={Contact} />
      <Footer />
      </>
    </Router>
  );
}

export default App;
