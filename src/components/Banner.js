import React, {useRef} from 'react';
import myLogo from '../images/my-logo.png';

const Banner = () => {

    return (
        <div className='banner'>
            <img src={myLogo} className='my-logo'/>

            <div className='nav'>
                <button type='button' onClick={() => {
                    document.getElementById('about').scrollIntoView({behaviour: 'smooth'});
                }}>About</button>

                <button type='button' onClick={() => {
                    document.getElementById('projects').scrollIntoView({behaviour: 'smooth'});
                }}>Projects</button>
                <button type='button' onClick={() => {
                    document.getElementById('contact').scrollIntoView({behaviour: 'smooth'});
                }}>Contact</button>
            </div>
            
        </div>
    )
};

export default Banner;