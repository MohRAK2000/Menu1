import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg'
const Header = () => {
  return (
    <header className=' navbar navbar-expand-md  bg-dark '>
      <div className='container '>
        <div className='d-flex'>

          <div className='logo'>
            <Link to='/' ><img src={logo} alt="logo" className='logo '  /></Link>
          </div>

          <nav className=' nav p-2   navbar-collapse justify-content' id='mainmenu'>
            <NavLink to='Creps'
              className={(navData) => navData.isActive ? 'nav-link ' : 'nav-link'}
            >Creps</NavLink>
            <NavLink to='Potato'
              className={(navData) => navData.isActive ? 'nav-link ' : 'nav-link'}
            >Potato</NavLink>
            <NavLink to='Sandwich'
              className={(navData) => navData.isActive ? 'nav-link ' : 'nav-link'}
            >Sandwich</NavLink>
            <NavLink to='Bergar'
              className={(navData) => navData.isActive ? 'nav-link ' : 'nav-link'}
            >Bergar</NavLink>
            <NavLink to='Wafels'
              className={(navData) => navData.isActive ? 'nav-link ' : 'nav-link'}
            >Wafels</NavLink>
            <NavLink to='Sweets'
              className={(navData) => navData.isActive ? 'nav-link ' : 'nav-link'}
            >Sweets</NavLink>
            <NavLink to='Juices'
              className={(navData) => navData.isActive ? 'nav-link ' : 'nav-link'}
            >Juices</NavLink>
          </nav>

        </div>
      </div>
    </header>
  )
}

export default Header