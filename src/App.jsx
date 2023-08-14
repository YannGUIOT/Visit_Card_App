import './App.scss'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import { Home } from './pages/Home/Home';

export const App = () => {

  return (
    <Router>
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  )
}