import logoMoon from '/images/icon-moon.svg'; 
import logo from '/images/logo.svg'
import './header.css'


export const Header = () => {
  return (
    <header> 
       <div className="heading">
         <img src={logo} alt='logo of the app' />
         <img className='heading_theme' src={logoMoon} alt="logo for dark mode" />
       </div>
    </header>
  )
}