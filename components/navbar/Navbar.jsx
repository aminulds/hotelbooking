import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../public/images/logo/logo.png';
import { BiUser, BiLogIn } from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className="container">
        <div className="navWrap">
          <div className="navbar-brand w-75">
            <Link href='/'>
              <a className='nav-link'>
                <Image src={logo} />
              </a>
            </Link>
          </div>
          <ul className='navbar-nav'>
            <li className='nav-item'><Link href='/signup'><a className='nav-link'>Register <BiUser /></a></Link></li>
            <li className='nav-item'><Link href='/login'><a className='nav-link'>Login <BiLogIn /></a></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar