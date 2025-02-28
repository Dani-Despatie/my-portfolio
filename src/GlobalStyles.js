import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --background: #15161C;
        --banner: #0E4686;
        --text: #E4E4E4;
        --accent: #6897CE;
        --accent-light: #BAC9DA;
        --accent2: #8D3B72;
        --shadow: drop-shadow(5px 5px #00000077);
    }

    .root {
        display: flex; 
        flex-direction: column;
        align-items: center;
    }

    section {
        width: 100%;
        max-width: 1230px;
        border-bottom: 2px solid var(--accent2);
    }

    body {
        background-color: var(--background);
        color: var(--text);
        position: relative;
        text-align: center;
        margin: 0px;
        line-height: 1.3em;
        font-size: 1.3rem;
        padding: 0 10px;
    }
    
    h2{
        color: var(--accent);
        margin: 30px 0 60px 0;
        filter: var(--shadow);
    }
    
    @media only screen and (min-width: 500px) {
        .root{
            margin: 0 10%;
        }

        body {
            font-size: 1.5rem;
        }
    }
`;

export default GlobalStyles;