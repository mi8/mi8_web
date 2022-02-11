import React from 'react';
import SEO from './SEO';
import Header from './Header';
import Footer from './Footer';
import SubFooter from './SubFooter';
import '../scss/style.scss';
import Mi8footer from './mi8Footer';

const Layout = (props) => (
  <>
    <SEO />
    <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
      <div id='wrapper' className='wrapper'>
        <Header />
        {props.children}
      </div>
      <Footer />
      <SubFooter />
      <Mi8footer />
    </div>
  </>
);

export default Layout;
