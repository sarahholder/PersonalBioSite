import utils from '../../helpers/utils';
import './projects.scss';

import projectData from '../../helpers/data/projectData';

const printProjects = () => {
  projectData.getProjects()
    .then((projects) => {
      let domString = '';
      domString += '<div class="myContainer">';
      domString += '<h2>Projects</h2>';
      domString += '<div class="row d-flex flex-wrap justify-content-center align-content-center">';
      projects.forEach((project) => {
        domString += `
        <div class="d-flex flex-wrap justify-content-center col-sm-6 col-lg-4 m-0 p-0">
        <div class="card">
            <img src="${project.screenshot1}"/>
            <div class="descriptions d-flex flex-wrap justify-content-center align-content-center">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <div class="d-flex flex-wrap justify-content-center">
                <a href="${project.url}">
                <button class="pl-4 pr-4 pt-2 pb-2"><h3>Website<i class="ml-2 fas fa-external-link-alt"></i></h3></a>
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
