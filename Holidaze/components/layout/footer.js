import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(){
    return(
        <footer>
            <nav className='nav flex-column sticky-bottom'>
                <Link href='/hotels'>
                    <a className='nav-link'>Hotels</a>
                </Link>                    
                <Link Link href='/contact'>
                    <a className='nav-link'>Contact</a>
                </Link>                   
                <Link href='/about'>
                    <a className='nav-link'>About</a>
                </Link>                     
                    <hr/>            
                <Link href='/'>
                    <a className='navbar-brand'>Holidaze</a>
                </Link>                                     
                    <p>Copyright &copy; 2022 Holidaze</p> 
                <Link href='/' scroll={true}>
                    <a className='nav'>↑</a>
                </Link>          
            </nav>
        </footer>
    );
}