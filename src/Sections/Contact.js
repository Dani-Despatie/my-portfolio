import styled from 'styled-components';
import linkedin from '../images/linkedin.png';

const Contact = () => {
    return (
        <Section className='contact' id='contact'>
            <h2>Contact</h2>
            <p>Via email by <i>dani.despatie@gmail.com</i></p>
            <p>Or through LinkedIn</p>
            
            <a href='https://www.linkedin.com/in/danielledespatie/'>
                <img src={linkedin} alt="LinkedIn" className="social-logo" />
            </a>
        </Section>
    )
};

export default Contact;

const Section = styled.section`
    padding: 70px 0;
    border-bottom: none;

    .social-logo {
        width: 50px;
        cursor: pointer;
        filter: var(--shadow);
    }
`;