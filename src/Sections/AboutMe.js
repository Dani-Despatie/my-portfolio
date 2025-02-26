import styled from 'styled-components';
import profilePic from '../images/my-picture.png';

// importing logos 
import javaLogo from '../images/java-logo.png';
import javaScriptLogo from '../images/javascript-logo.png';
import htmlLogo from '../images/html-logo.png';
import cssLogo from '../images/css-logo.png';
import reactLogo from '../images/react-logo.png';
import mongodbLogo from '../images/mongodb-logo.png';

import SkillIcons from '../components/SkillIcons';

const AboutMe = () => {
    return(
        <Section id='about'>
            <h2>About me</h2>
            <img src={profilePic} alt="profile picture" className='profile-pic'/>
            <p>
                My name is Danielle Despatie. I'm a full stack web developper from Montréal who loves learning new skills and figuring out unique and exciting ways to apply them.
                As a former Physics student and Teaching Assistant I also have plenty of experience 
                with Mathematics, and creating clear instructions and diagrams to communicate ideas.
            </p>
            <p>I have experience with</p>
            <div className='skill-grid'>
                <SkillIcons src = {htmlLogo}>HTML</SkillIcons>
                <SkillIcons src = {cssLogo}>CSS</SkillIcons>
                <SkillIcons src = {javaScriptLogo}>Javascript</SkillIcons>
                <SkillIcons src = {reactLogo}>React</SkillIcons>
                <SkillIcons src = {mongodbLogo}>MongoDB</SkillIcons>
                <SkillIcons src = {javaLogo}>Java</SkillIcons>
            </div>

        </Section>
    )
};

export default AboutMe;

const Section = styled.section`
    padding: 70px 0;
    align-content: center;
    min-height: calc(100vh - 70px);

    .profile-pic {
        width: 300px;
        border: 1px solid var(--accent2);
        border-radius: 150px;
        box-shadow: 4px 6px #0000006B;
        transition: transform 0.2s ease-in-out;
    }
    
    .skill-grid {
        display: grid;
        grid-template-columns: auto auto;
        width: fit-content;
        column-gap: 40px;
        margin: auto;
        padding: 0 20px;
    }
    .skill-grid div {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: color 0.2s ease-in-out;
    }

    @media screen and (min-width: 720px) {
        .skill-grid {
            grid-template-columns: auto auto auto;
            column-gap: 35px;
            cursor: default;
        }
    }

    @media screen and (min-width: 500px) {
        
        .skill-grid div:hover {
            color: var(--accent-light);
        }
        .profile-pic:hover {
            transform: scale(1.01);
        }
    }
`;