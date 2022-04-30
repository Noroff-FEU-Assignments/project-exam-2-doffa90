import Link from 'next/link';
import Image from "next/image"
import scroll from "../../public/scrollTop.png"


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
                    <a className='nav-link'>
                        <Image
                            src={scroll}
                            layout="fixed"
                            height={25}
                            width={25}
                        />
                    </a>
                </Link>          
            </nav>
        </footer>
    );
}