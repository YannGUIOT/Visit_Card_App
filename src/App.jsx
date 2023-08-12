import './App.scss'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';

export const App = () => {

  return (
    <Router>
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  )
}