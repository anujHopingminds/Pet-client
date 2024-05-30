import { Navbar } from 'responsive-navbar-react';
import 'responsive-navbar-react/dist/index.css';
function Header() {

   const props = {
    items: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about'
      },
      {
        text: 'Team',
        link: '/team'
      },
      {
        text: 'Login',
        link: '/signup'
      }
    ],
    logo: {
      text: "Pawsitive Star"
    },
    style: {
      barStyles: {
        background: '#444',
       
      },
      sidebarStyles: {
        background: '#222',
        buttonColor: 'white'
      }
    }}
  return (
    <div className='navbar-container'>
        <Navbar {...props} />
    </div>
  )
}

export default Header
