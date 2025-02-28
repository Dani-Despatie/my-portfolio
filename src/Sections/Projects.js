import styled from 'styled-components';
// Images
import ecommerce from '../images/e-commerce.png';
import tasteBuddies from '../images/taste-buddies.png';
import spotifyCsv from '../images/spotify-csv.png';

const Projects = () => {
    return (
        <Section className='projects' id='projects'>
            <h2>Projects</h2>
            <div className='project-grid'>
                <div className='img-container'>
                    <a href='https://github.com/Dani-Despatie/Taste-Buddies'>
                        <img src={tasteBuddies} alt="Taste Buddies" className='project' />
                    </a>
                </div>
                <div>
                    <h3>Taste Buddies</h3>
                    <p>
                        A recipe sharing website where users can find recipes, post and edit their own recipes,
                        and favourite recipes from other users.
                    </p>
                    <p>
                        This project was made using React and MongoDB, and includes signing up, creating a recipe for storage in the database, and the ability to
                        favourite other user's recipes.
                    </p>
                </div>
            </div>
            <div className='project-grid'>
                <div className='img-container'>
                    <a href='https://github.com/Dani-Despatie/project-GROUP-e-commerce'>
                        <img src={ecommerce} alt="E-Commerce Project" className='project' />
                    </a>
                </div>
                <div>
                    <h3>Group E-Commerce Project</h3>
                    <p>
                        This was a group project for Concordia's Web Development program.
                    </p>
                    <p>
                        My work was mainly on the back-end, but I also created and
                        implemented some front-end logic and played a significant role in the overall styling of the page.
                    </p>
                </div>
            </div>

            <div className = 'project-grid'>
                <div className = 'img-container'>
                    <a href = 'https://github.com/Dani-Despatie/SpotifyPlaylistProject'>
                        <img src = {spotifyCsv} alt = 'Spotify to CSV Project' className = 'project' />
                    </a>
                </div>
                <div>
                    <h3>Spotify Playlist to CSV Project</h3>
                    <p>
                        This is a little project I made for someone I know who needed track listings for a Spotify playlist to be exported to an Excel file.
                    </p>
                    <p>
                        This website uses the Spotify API to get the listed songs in a playlist, and output the titles, artists, and song length in a downloadable csv file.
                        In order for the Spotify API to function it also requires getting permission from the user to access their account data, 
                        and using access tokens and refresh tokens to request the information.
                    </p>
                </div>
            </div>

        </Section>
    )
};

export default Projects;

const Section = styled.section`
    padding: 70px 0;
    
    .project {
        border: 2px solid var(--accent2);
        width: 65%;
        max-width: 400px;
        margin: auto;
        transition: transform 0.2s ease-in-out;
    }
    .project-grid {
        display: grid;
        grid-template-columns: auto ;
        align-items: center;
        padding: 10px;
    }
    .project:hover {
        transform: scale(1.01);
    }

    .img-container {
        text-align: center;
    }
    img {
        filter: var(--shadow);
    }

    @media screen and (min-width: 1540px) {
        .project-grid {
            grid-template-columns: 40vw auto;
            text-align: left;
            margin: 30px 0;
        }

        .project-grid div {
            margin: 0 20px 0 0;
        }
    }
`;