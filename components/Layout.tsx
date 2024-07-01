import Navbar from './Navbar'
import React, { ReactNode } from 'react';
import Footer from './Footer';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children})=> {
  return (
    <div className='layout'>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout