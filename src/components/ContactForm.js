import React, { useState } from 'react';
import '../scss/components/_contact-form.scss';
import address from '../../static/images/contact-page/home-address.svg';
import building from '../../static/images/contact-page/building.svg';
import phone from '../../static/images/contact-page/phone.svg';
import email from '../../static/images/contact-page/email.svg';
import world from '../../static/images/contact-page/world.svg';
import twitter from '../../static/images/social/twitter.svg';
import linkedin from '../../static/images/footer/linkedin.svg';

const Contactform = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', content: '' });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({ name: '', email: '', subject: '', content: '' });
  };
  return (
    <>
      <div className='form'>
        <div className='block'>
          <div className='write-us'>
            <form onSubmit={handleSubmit} className='left-content'>
              <h3>Contact Form </h3>
              <div className='form-control'>
                <input type='text' name='name' placeholder='Name' onChange={handleChange} value={form.name} />
              </div>
              <div className='form-control'>
                <input type='text' name='email' placeholder='Email' onChange={handleChange} value={form.email} />
              </div>
              <div className='form-control'>
                <input type='text' name='subject' placeholder='Subject' onChange={handleChange} value={form.subject} />
              </div>
              <div className='form-control'>
                <textarea style={{ resize: 'none' }} type='text' name='content' placeholder='Content' onChange={handleChange} value={form.content} />
              </div>
              <div className='send-message'>
                <input type='submit' className='button' value='Send Message' />
              </div>
            </form>
          </div>
          <div className='contact-information'>
            <div className='right-content'>
              <h3>Contact Information</h3>
              <p>We're open for any suggestion or just to have a chat</p>
              <div className='all-info'>
                <div className='information'>
                  <div className='circle'>
                    <img className='icon building' src={building} alt='' />
                  </div>
                  <div className='info'>
                    Name : <p>mi8 SRL</p>
                  </div>
                </div>
                <div className='information'>
                  <div className='circle'>
                    <img className='icon address' src={address} alt='' />
                  </div>
                  <div className='info'>
                    Address : <p>Chaussée de Namur 31/5, 1457 Walhain, Belgium</p>
                  </div>
                </div>
                <div className='information'>
                  <div className='circle'>
                    <img className='icon phone' src={phone} alt='' />
                  </div>
                  <div className='info'>
                    Phone : <p> + 32 00 00 00</p>
                  </div>
                </div>
                <div className='information'>
                  <div className='circle'>
                    <img className='icon email' src={email} alt='' />
                  </div>
                  <div className='info'>
                    Email : <p> info@mi8.be</p>
                  </div>
                </div>
                <div className='information'>
                  <div className='circle'>
                    <img className='icon world' src={world} alt='' />
                  </div>
                  <div className='info'>
                    Website :
                    <p>
                      <a href='https://testwalchain.netlify.app/' rel='noreferrer' target='_blank'>
                        mi8.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className='information'>
                  <div className='circle'>
                    <img className='icon twitter' src={twitter} alt='' />
                  </div>
                  <div className='info'>
                    Twitter :
                    <p>
                      <a href='https://twitter.com/mobileInception' rel='noreferrer' target='_blank'>
                        mobileInception
                      </a>
                    </p>
                  </div>
                </div>
                <div className='information'>
                  <div className='circle'>
                    <img className='icon linkedin' src={linkedin} alt='' />
                  </div>
                  <div className='info'>
                    Linkedin :
                    <p>
                      <a href='https://www.linkedin.com/company/mi8-be/about/' rel='noreferrer' target='_blank'>
                        mi8-be
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactform;
