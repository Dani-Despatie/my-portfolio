// images
import linkedin from '../images/linkedin.png';

const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <h2>Contact</h2>
            <p>Via email by <i>dani.despatie@gmail.com</i></p>
            <p>Or through LinkedIn</p>
            <a href='https://www.linkedin.com/in/danielle-despatie-a3537414a/'><img src={linkedin} alt="LinkedIn" className="social-logo"/></a>
        </section>
    )
};

export default Contact;