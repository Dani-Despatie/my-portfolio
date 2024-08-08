
// Images
import nyanCat from '../images/nyan-cat.png';
import slingair from '../images/slingair.png';

const Projects = () => {
    return (
        <section className='projects' id='projects'>
            <h2>Projects</h2>
            <div className='project-grid'>
                <img src={nyanCat} alt="Nyan Cat" className='project'/> 
                <div>
                    <h3>Nyan Cat Game</h3>
                    <p>
                        This is a browser game for which I added hit detection, enabled the game to end,
                         added a start button, and added a score count.
                    </p>
                </div>
            </div>
            <div className='project-grid'>
                <img src={slingair} alt="Slingshot Airlines" className='project'/>
                <div>
                    <h3>Slingshot Airlines</h3>
                    <p>
                        A mock airline service where I set up a MongoDB server,
                        and created endpoints for seat availability, ticket cancellation, and other features.
                    </p>
                </div>
            </div>
            
        </section>
    )
};

export default Projects;