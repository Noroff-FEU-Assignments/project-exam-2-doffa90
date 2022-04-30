import Link from 'next/link';

export default function Navbar() {

  return(

<nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <Link href='/'>
              <a className='navbar-brand'>Holidaze</a>
            </Link>
            <button className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target="#navbarToggler" 
            aria-controls="navbarToggler" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarToggler'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
                <Link href='/'>
                <a className='nav-link'>Home</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/hotels'>
                <a className='nav-link'>Hotels</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/contact'>
                <a className='nav-link'>Contact</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/about'>
                <a className='nav-link'>About</a>
                </Link>
              </li>
            </ul>
          </div>
          
          </div>

        </nav>
  );
}