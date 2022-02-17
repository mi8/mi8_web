import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import '../scss/components/_mi8Footer.scss';

const SubFooter = () => {
  const data = useStaticQuery(graphql`
    query SubFooterQuery {
      configJson {
        footer {
          copyright_text
          copyright_link
        }
      }
    }
  `);
  return (
    <div
      className='sub-footer'
      style={{
        backgroundColor: '#424242',
        display: 'grid',
        gridTemplateColumns: '1fr repeat(3,auto) 1fr',
        gridColumnGap: '5px',
        justifyItems: 'center',
      }}
    >
      <div className='mi8-copyright'>
        <span>{data.configJson.footer.copyright_text}</span>
        {data.configJson.footer.copyright_link && <a href={data.configJson.footer.copyright_link}>{data.configJson.footer.copyright_link}</a>}
      </div>
      <div className='links'>
        <Link className='a' to='/'>
          Home
        </Link>
        <Link className='a' to='/contact'>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default SubFooter;
