import utils from '../../helpers/utils';
import './projects.scss';

import projectData from '../../helpers/data/projectData';

const printProjects = () => {
  projectData.getProjects()
    .then((projects) => {
      let domString = '';
      domString += '<div class="myContainer">';
      domString += '<h2>Projects</h2>';
      domString += `<div class="text-center">
<div class="d-flex flex-wrap align-content-center">`;
      projects.forEach((project) => {
        domString += `<div class="card">
          <div class="card-body">
            <div class="card-title">${project.title}</div>
            <img class="img-fluid" src="${project.screenshot1}"  class="card-top-img" alt="${project.title}">
          </div>
        </div>`;

        utils.printToDom('projectsDiv', domString);
      });
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
    })
    .catch((error) => console.error('Could not print projects: ', error));
};

export default { printProjects };
