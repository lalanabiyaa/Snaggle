import React from 'react';
import { Link } from 'react-router-dom';

const NavbarToko = () => {
   return (
      <nav
         style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem clamp(1rem, 4vw, 2rem)',
            backgroundColor: '#FFF3E4',
            borderBottom: '2px solid #FFF3E4',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
         }}
      >
         {/* Navigation Links */}
         <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link
               to="/snaggle"
               style={{
                  margin: '0 1rem',
                  textDecoration: 'none',
                  color: 'black',
               }}
            >
               Home
            </Link>
            <Link
               to="/display"
               style={{
                  margin: '0 1rem',
                  textDecoration: 'none',
                  color: 'black',
               }}
            >
               Product
            </Link>
         </div>

         {/* Logo */}
         <Link
            to="/"
            style={{
               textDecoration: 'none',
               color: 'black',
               fontWeight: 'bold',
               fontSize: '1.5rem',
               fontFamily: '"Jersey 25", serif',
            }}
         >
            Snaggle
         </Link>

         {/* Search Bar */}
         <div
            style={{
               display: 'flex',
               alignItems: 'center',
               backgroundColor: 'white',
               borderRadius: '8px',
               padding: '0.5rem',
               flex: '1 1 220px',
               maxWidth: '360px',
            }}
         >
            <input
               type="text"
               placeholder="Nama Barang"
               style={{
                  flex: 1,
                  minWidth: 0,
                  border: 'none',
                  outline: 'none',
                  marginRight: '0.5rem',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  fontSize: '1rem',
               }}
            />
            <button
               style={{
                  backgroundColor: '#F7A8B8',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.5rem 1rem',
                  cursor: 'pointer',
               }}
            >
               Search
            </button>
         </div>
      </nav>
   );
};

export default NavbarToko;
