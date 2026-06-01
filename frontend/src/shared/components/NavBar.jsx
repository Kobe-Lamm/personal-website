import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
        <nav>
            <ul className='flex justify-between items-center'>
                <li className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"><Link to='/about-me'>About Me</Link></li>
                <li className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"><Link to='/projects'>Past Projects</Link></li>
                <li className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"><Link to='/contact-me'>Contact Me</Link></li>
            </ul>
        </nav>
  )
}

export default NavBar