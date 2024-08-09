import profilePic from '../images/my-picture.png';

// importing logos 
import javaLogo from '../images/java-logo.png';
import javaScriptLogo from '../images/javascript-logo.png';
import htmlLogo from '../images/html-logo.png';
import cssLogo from '../images/css-logo.png';
import reactLogo from '../images/react-logo.png';
import mongodbLogo from '../images/mongodb-logo.png';

const AboutMe = () => {
    return(
        <section className='about-me' id='about'>
            <h2>About me</h2>
            <img src={profilePic} alt="profile picture" className='profile-pic'/>
            <p>
                My name is Danielle Despatie. I'm a full stack web developper from Montréal who loves learning new skills and figuring out how to apply them.
                As a former Physics student and Teaching Assistant, I also have plenty of experience 
                with Mathematics, and creating understandable instructions and diagrams to communicate ideas.
                <br/>In my free time I play games, play music, crochet, and occasionally draw.

            </p>
            <p>I have experience with</p>
            <div className='skill-grid'>
                <div><img src={javaLogo} className='logo' alt='Java'/>Java</div>
                <div><img src={htmlLogo} className='logo'alt='HTML'/>HTML</div>
                <div><img src={cssLogo} className='logo' alt="CSS"/>CSS</div>
                <div><img src={javaScriptLogo} className='logo' alt="Javascript"/>Javascript</div>
                <div><img src={reactLogo} className='logo'alt="React"/>React</div>
                <div><img src={mongodbLogo} className='logo'alt="MongoDB"/>MongoDB</div>
            </div>
        </section>
    )
};

export default AboutMe;