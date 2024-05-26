import React from 'react';
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
        text: 'Doc',
        link: '#docs'
      },
      {
        text: 'Custom',
        link: '#custom-bar'
      },
      {
        text: 'Contact',
        link: '/signup'
      }
    ],
    logo: {
      text: 'Responsive Navbar React'
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
