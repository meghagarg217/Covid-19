import React from 'react';
import { useHistory } from 'react-router';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsappIcon from '@material-ui/icons/WhatsApp'

import './Footer.css';

const Footer = () => {
    const history = useHistory();
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer_2'>
                    <div className='footer_icons'>
                        <FacebookIcon fontSize="large" style={{color: 'gray',fontSize: '60px', marginRight: '225px'}}/>
                        <InstagramIcon fontSize="large" style={{color: 'gray',fontSize: '60px', marginRight: '225px'}}/>
                        <TwitterIcon  fontSize="large" style={{color: 'gray',fontSize: '60px', marginRight:'225px'}}/>
                        <YouTubeIcon fontSize="large"  style={{color: 'gray',fontSize: '60px', marginRight: '225px'}}/>
                        <WhatsappIcon fontSize="large" style={{color: 'gray',fontSize: '60px'}} onClick={() => history.push('/whatsapp')}/>
                    </div>
                  
                </div>
                
                

            </div>
           
               
                
        </div>
    );
}

export default Footer;