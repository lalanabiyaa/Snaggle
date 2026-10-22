import React from 'react';
import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';

const Layout = ({ children }) => {
   return (
      <React.Fragment>
         <Navbar />
         <div style={{ minHeight: '100vh' }}>
            {/* <div className="column has-background-danger-80 is-2">
          <Sidebar />
        </div> */}
            <div className="p-4" style={{ backgroundColor: '#f8f1e4', minHeight: '100vh' }}>
               <main>{children}</main>
            </div>
         </div>
      </React.Fragment>
   );
};

export default Layout;
