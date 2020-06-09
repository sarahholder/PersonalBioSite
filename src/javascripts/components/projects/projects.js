import utils from '../../helpers/utils';
import './projects.scss';

import projectData from '../../helpers/data/projectData';

const printProjects = () => {
  projectData.getProjects()
    .then((projects) => {
      let domString = '';
      domString += '<div class="myContainer">';
      domString += '<h2>Projects</h2>';
      domString += '<div class="row">';
      projects.forEach((project) => {
        domString += `
        <div class="d-flex flex-wrap justify-content-center col-md-6 col-lg-4 m-0 p-0">
        <div class="card">
            <img src="${project.screenshot1}"/>
            <div class="descriptions">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <div class="d-flex flex-wrap justify-content-center">
                <button>
                    <i class="fas fa-search-plus"></i>
                    View Full Project Details
                </button>
                </div>
            </div>
        </div>
    </div>`;
        utils.printToDom('projectsDiv', domString);
      });
      domString += '</div>';
      domString += '</div>';
    })
    .catch((error) => console.error('Could not print projects: ', error));
};

export default { printProjects };
