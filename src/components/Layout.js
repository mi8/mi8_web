import React from 'react';
import SEO from './SEO';
import Header from './Header';
import SubFooter from './SubFooter';
import '../scss/style.scss';

const Layout = (props) => (
  <>
    <SEO />
    <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
      <div id='wrapper' className='wrapper'>
        <Header />
        {props.children}
      </div>
      {/* <Footer /> */}
      <SubFooter />
    </div>
  </>
);

export default Layout;
