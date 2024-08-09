import React, {useState} from 'react'
import { MdClose, MdMenu } from 'react-icons/md';
import { navLinks } from '../constants';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import { mainLogo } from '../assets';

const Navbar = () => {
    const [active, setActive] = useState(false);
  return (
    <div className={`${styles.paddingX} w-full flex justify-around items-center py-5 absolute top-0 z-10`}>
        <div className="flex items-center">
        <Link to="/" className="flex items-center mr-10" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={mainLogo} alt="logo" className="h-4 xs:h-2 md:h-10 w-full object-cover border-0" />
        </Link>
        <ul className='hidden md:flex flex-row justify-start items-center'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-sky-600" : "text-white"} hover:text-sky-600 text-[18px] px-8 py-2 bg-transparent rounded-md hover:bg-gray-800 font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
               <Link to={`${link.link}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
        </div>
        <div className='md:flex hidden  gap-2 justify-center items-center'>
            <button className='rounded-md text-white bg-transparent px-4 py-2 hover:bg-gray-800 hover:text-sky-600 hover:border-sky-600 hover:border-2 hover:-translate-y-2'>Register</button>
            <button className='rounded-md bg-sky-500 px-4 py-2 hover:-translate-y-2'>Book a Consultation</button>
        </div>
    </div>
  )
}

export default Navbar