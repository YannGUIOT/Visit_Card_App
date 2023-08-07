import {Link} from 'react-router-dom';

export const Navbar = () => {

  return (
    <div>
      <nav>
        <div className='first-nav-part'>
          <ul>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/about"> About </Link></li>
            <li><Link to="/other"> Other </Link></li>
          </ul>
        </div>
        <div className='second-nav-part'>
        </div>
      </nav>
    </div>
  )
}