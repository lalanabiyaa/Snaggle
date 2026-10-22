import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Welcome = () => {
   const { user } = useSelector(state => state.auth);
   const [categories, setCategories] = useState([]);
   const [products, setProducts] = useState([]);

   useEffect(() => {
      getCategories();
      getProducts();
   }, []);

   const getCategories = async () => {
      try {
         const response = await axios.get('https://snaggle.onrender.com/category');
         setCategories(response.data);
      } catch (error) {
         console.error('Error fetching categories:', error);
      }
   };

   const getProducts = async () => {
      try {
         const response = await axios.get('https://snaggle.onrender.com/product');
         setProducts(response.data);
      } catch (error) {
         console.error('Error fetching products:', error);
      }
   };

   return (
      <div
         style={{
            margin: 'auto',
            marginTop: '2rem',
            flexGrow: 1,
            width: '90%',
            fontFamily: 'Josefin Sans, sans-serif', // Menambahkan font Josefin Sans
         }}
      >
         <h1
            style={{
               fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
               fontWeight: 'bold',
               marginBottom: '1rem',
               textAlign: 'left', // Teks Dashboard rata kiri
            }}
         >
            Dashboard
         </h1>
         <h2
            style={{
               fontSize: 'clamp(1.4rem, 4vw, 2rem)', // Memperbesar font Welcome Back
               fontWeight: 'bold',
               marginBottom: '2rem',
               textAlign: 'left',
            }}
         >
            Welcome Back <strong>{user && user.name}</strong>
         </h2>

         {/* Bagian Category dan Produk */}
         <div
            style={{
               display: 'grid',
               gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
               gap: '1rem', // Jarak antar kotak lebih rapat
               marginTop: '2rem',
               maxWidth: '720px',
            }}
         >
            {/* Kotak Category */}
            <div style={cardStyle}>
               <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
                  Category {/* Ukuran font lebih besar */}
               </h2>
               <p
                  style={{
                     fontSize: '1rem', // Ukuran font lebih kecil untuk jumlah
                     marginBottom: '1rem',
                     fontWeight: 'normal', // Menghilangkan bold pada jumlah
                  }}
               >
                  {categories.length} Categories{' '}
                  {/* Menampilkan jumlah kategori */}
               </p>
               <Link
                  to="/category"
                  style={{
                     fontSize: '1rem',
                     color: '#2f855a',
                     textDecoration: 'none', // Menghilangkan underline
                     transition: 'color 0.3s ease', // Efek transisi saat hover
                  }}
                  onMouseOver={e => (e.target.style.color = '#38a169')} // Ganti warna saat hover
                  onMouseOut={e => (e.target.style.color = '#2f855a')} // Kembalikan warna normal
               >
                  Detail
               </Link>
            </div>

            {/* Kotak Produk */}
            <div style={cardStyle}>
               <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
                  Produk {/* Ukuran font lebih besar */}
               </h2>
               <h3
                  style={{
                     fontSize: '1rem', // Ukuran font lebih kecil untuk jumlah
                     marginBottom: '1rem',
                     fontWeight: 'normal', // Menghilangkan bold pada jumlah
                  }}
               >
                  {products.length} Produk {/* Menampilkan jumlah produk */}
               </h3>
               <Link
                  to="/products"
                  style={{
                     fontSize: '1rem',
                     color: '#2f855a',
                     textDecoration: 'none', // Menghilangkan underline
                     transition: 'color 0.3s ease', // Efek transisi saat hover
                  }}
                  onMouseOver={e => (e.target.style.color = '#38a169')} // Ganti warna saat hover
                  onMouseOut={e => (e.target.style.color = '#2f855a')} // Kembalikan warna normal
               >
                  Detail
               </Link>
            </div>
         </div>
      </div>
   );
};

const cardStyle = {
   minHeight: '130px',
   border: '2px solid black',
   borderRadius: '20px',
   padding: '1rem 1.2rem',
   backgroundColor: 'white',
   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
   textAlign: 'left',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',
};

export default Welcome;
