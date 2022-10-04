import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/logo/logo.png';
import { BiUser, BiLogIn } from 'react-icons/bi';


const TopNav = () => {
  return (
    <div className="navWrap">
      <div className="navbar-brand w-75">
        <Link href='/'>
          <a className='nav-link'>
            <Image src={logo} />
          </a>
        </Link>
      </div>
      <ul className='navbar-nav'>
        <li className='nav-item'><Link href='/signup'><a className='nav-link'><span className='d-none d-sm-block'>Register</span> <BiUser /></a></Link></li>
        <li className='nav-item'><Link href='/login'><a className='nav-link'><span className='d-none d-sm-block'>Login</span> <BiLogIn /></a></Link></li>
      </ul>
    </div>
  )
}

export default TopNav