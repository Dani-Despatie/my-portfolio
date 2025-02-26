import React, {useRef} from 'react';
import styled from 'styled-components';
import myLogo from '../images/my-logo.png';

const Banner = () => {

    return (
        <BannerContainer>
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
            
        </BannerContainer>
    )
};

export default Banner;

const BannerContainer = styled.div`
    position: fixed;
    background-color: var(--banner);
    left: 0px;
    width: 100%;
    height: 70px;
    font-size: 1.5rem;
    display:flex;
    justify-content: center;
    align-content: center;
    z-index: 1;

    .nav {
        display: grid;
        grid-template-columns: auto auto auto;
        margin: 10px;
        align-content: center;
    }

    .my-logo{
        visibility: collapse;
    }

    button {
        cursor: pointer;
        padding: 10px;
        background-color: transparent;
        color: var(--text);
        border: none;
        font-size: 0.7em;
        transition: transform 0.2s ease-in-out;
        filter: var(--shadow);
    }

    @media screen and (min-width: 500px) {
        justify-content: space-between;

        .my-logo {
            visibility: visible;
        }
        button:hover {
           transform: scale(1.05);
        }
    }
`;