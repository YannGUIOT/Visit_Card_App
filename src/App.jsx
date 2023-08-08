import './App.scss'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';
import { Other } from './pages/Other/Other';

import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Slug } from './components/Slug/Slug';

export const App = () => {

  return (
    <Router>
      {/* <Navbar /> */}
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/other" element={<Other />} />
            <Route path="/other/:otherSlug" element={<Slug />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}