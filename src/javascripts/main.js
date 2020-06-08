import 'core-js';

import imageHeading from './components/imageHeading';
import about from './components/about/about';
import tech from './components/tech/tech';
import projects from './components/projects/projects';

import 'bootstrap';
import '../styles/main.scss';

// Type Method

const init = () => {
  imageHeading.printImageHeading();
  about.printAbout();
  tech.printTech();
  projects.printProjects();
};

init();
