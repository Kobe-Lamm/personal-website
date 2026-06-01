import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <ul><Link to='/about-me'>About Me</Link></ul>
        <ul><Link to='/contact-me'>Work With Me</Link></ul>
        <ul><Link to='/projects'>Projects</Link></ul>
        <ul><Link to='/skills'>Skills</Link></ul>
        <ul><Link to='/blogs'>Blogs</Link></ul>
    </nav>
  )
}

export default NavBar;