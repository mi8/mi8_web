import React from 'react';
import '../scss/components/_mi8Footer.scss';

const Mi8footer = () => {
  return (
    <>
      <footer className='mi8-footer'>
        <div className='container'>
          <p className='footer-info'>
            Looking for a partner to boost your digital transformation ? <br /> We'd love to help.
          </p>
          <div className='group-information'>
            <div className='description i-phone'> mi8 SRL</div>
            <div className='description i-print'>VAT BE 0535.711.105</div>
            <div className='description i-telegram'>
              <a id='email' href={`mailto:info@mi8.be`} style={{}}>
                info@mi8.be
              </a>
            </div>
            <div className='description i-book'>Chaussée de Namur 31/5</div>
            <div className='description'> 1457 Walhain, Belgium</div>
          </div>
          <div className='contact-us'>
            <a className='contact-button' href={`mailto:info@mi8.be`} style={{ color: '#ffffff' }}>
              <span className='img'></span>
              <span className='text'>CONTACT US</span>
            </a>
            <div className='icons'>
              <div className='twitter'></div>
              <div className='linkedin'></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Mi8footer;
