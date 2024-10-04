// Images
import ecommerce from '../images/e-commerce.png';
import tasteBuddies from '../images/taste-buddies.png';

const Projects = () => {
    return (
        <section className='projects' id='projects'>
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
                    <p>This project was made using React and MongoDB, and includes encrypted passwords for users.</p>
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
                        My work was mainly on the back-end (endpoints), but I also created and
                        implemented contexts used in the rest of the page, and played a significant role in
                        the page's styling.
                    </p>
                </div>
            </div>

        </section>
    )
};

export default Projects;