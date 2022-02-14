import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Social from './Social';

const SubFooter = (props) => {
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
    <div className='sub-footer' style={{ backgroundColor: '#424242', display: 'flex', justifyContent: 'center', alignItems: 'center',padding:"15px" }}>
      <div className=''>
        <div className='row'>
          <div className='col-12'>
            <div className='sub-footer-inner'>
              <div className='copyright'>
                <span>{data.configJson.footer.copyright_text}</span>
                {data.configJson.footer.copyright_link && <a href={data.configJson.footer.copyright_link}>{data.configJson.footer.copyright_link}</a>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
