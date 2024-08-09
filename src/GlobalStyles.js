import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --background: #1E1F23;
        --banner: #083831;
        --text: #F3FFE5;
        --accent: #20C4AE;
        --accent-light: #bdeee7;
    }

    body {
        background-color: var(--background);
        color: var(--text);
        position: relative;
        text-align: center;
        margin: 0px;
        line-height: 1.3em;
        font-size: 1.6em;
    }
    button {
        cursor: pointer;
        padding: 10px;
        background-color: transparent;
        color: var(--text);
        border: none;
        font-size: 0.7em;
        transition: transform 0.2s ease-in-out;
    }
    

    .logo {
        width: 30px;
    }
    .my-logo{
        visibility: collapse;
    }
    .social-logo {
        width: 50px;
        cursor: pointer;
    }
    .profile-pic {
        width: 300px;
        border: 1px solid var(--accent);
        border-radius: 150px;
        transition: transform 0.2s ease-in-out;
    }

    .skill-grid {
        display: grid;
        grid-template-columns: auto auto;
        width: fit-content;
        column-gap: 40px;
        margin: auto;
        padding: 0 20px;
        color: var(--accent);
    }
    .skill-grid div {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: color 0.3s ease-in-out;
    }
    .project-grid {
        display: grid;
        grid-template-columns: auto ;
        align-items: center;
        padding: 10px;
    }
    .project {
        border: 2px solid var(--accent);
        width: 60%;
        max-width: 400px;
        margin: auto;
        transition: transform 0.3s ease-in-out;
    }
    
    
    .banner {
        position: fixed;
        background-color: var(--banner);
        left: 0px;
        width: 100%;
        height: 70px;
        display:flex;
        justify-content: space-between;
        align-content: center;
        z-index: 1;
    }
    h2{
        color: var(--accent);
        margin: 30px 0 60px 0;
    }
    .nav {
        display: grid;
        grid-template-columns: auto auto auto;
        margin: 10px;
        align-content: center;
    }
    .about-me {
        padding: 70px 0;
        align-content: center;
        min-height: calc(100vh - 70px);
        border-bottom: 2px solid var(--accent);
    }
    .projects {
        padding: 70px 0;
        border-bottom: 2px solid var(--accent);
    }
    .contact {
        padding: 70px 0;
    }
    
    @media only screen and (min-width: 500px) {
        .root{
            margin: 0 10%;
        }
        .project-grid {
            grid-template-columns: 40vw auto;
            text-align: left;
            margin: 30px 0;
        }
        .project-grid div {
            margin: 0 20px 0 0;
        }
        .project:hover {
            transform: scale(1.2);
        }
        .skill-grid {
            grid-template-columns: auto auto auto;
            column-gap: 35px;
            cursor: default;
        }
        .skill-grid div:hover {
            color: var(--accent-light);
        }
        .profile-pic:hover {
            transform: scale(1.05);
        }
        button:hover {
           transform: scale(1.2);
        }
        .my-logo {
            visibility: visible;
        }
`;

export default GlobalStyles;

//https://www.linkedin.com/in/danielle-despatie-a3537414a/