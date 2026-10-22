// NavbarComponent.js
import React from 'react';
import 'bulma/css/bulma.min.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
   const containerStyle = {
      display: 'grid',
      gridTemplateColumns: '2fr 6fr',
      gap: '20px',
      backgroundColor: '#f8f1e4',
      fontFamily: 'Josefin Sans, sans-serif',
      alignItems: 'start',
   };

   const headerStyle = {
      marginBottom: 'clamp(1rem, 5vw, 50px)',
      gridColumn: 'span 2',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      position: 'relative',
   };

   const logoStyle = {
      fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
      fontWeight: '400',
      fontStyle: 'bold',
      color: '#000',
      fontFamily: '"Jersey 25", serif',
   };

   const navStyle = {
      display: 'flex',
      gap: '15px',
      flexDirection: 'row',
   };

   const navLinkStyle = ({ isActive }) => ({
      textDecoration: 'none',
      fontSize: '18px',
      backgroundColor: 'transparent',
      color: isActive ? '#416B39' : undefined,
   });
   const emptyBoxStyle = {
      gridColumn: 'span 2',
      height: '50px',
      backgroundColor: '#F1C9F9',
   };

   return (
      <div style={containerStyle}>
         <div style={emptyBoxStyle}></div>

         <header style={headerStyle}>
            <nav style={navStyle}>
               <NavLink
                  to="/customer"
                  end
                  style={navLinkStyle}
                  className="navbar-item"
               >
                  Home
               </NavLink>
               <NavLink
                  to="/customer/product"
                  style={navLinkStyle}
                  className="navbar-item"
               >
                  Products
               </NavLink>
            </nav>
            <h1 className="cust-logo" style={logoStyle}>Snaggle</h1>
         </header>
      </div>
   );
};

export default Navbar;
