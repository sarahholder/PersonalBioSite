import imageHeading from './components/imageHeading';
import bio from './components/bio/bio';
import tech from './components/tech/tech';

import 'bootstrap';
import '../styles/main.scss';


const init = () => {
  imageHeading.printImageHeading();
  bio.printBio();
  tech.printTech();
};

init();
