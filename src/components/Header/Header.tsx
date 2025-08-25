import logoMoon from '/assets/images/icon-moon.svg'; 
import logo from '/assets/images/logo.svg';
import './header.css'

type HeaderProps = {
  onToggleMode: () => void;
};
export const Header = ({ onToggleMode }: HeaderProps) => {
  return (
    <header> 
       <div className="heading">
         <img src={logo} alt='logo of the app' />
         <img
           onClick={onToggleMode} 
           className='heading_theme' src={logoMoon} alt="logo for dark mode" />
       </div>
    </header>
  )
}