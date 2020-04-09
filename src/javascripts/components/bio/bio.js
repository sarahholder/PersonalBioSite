/* eslint-disable max-len */
import utils from '../../helpers/utils';
import './bio.scss';

const printBio = () => {
  let domString = '';
  domString += '<div>';
  domString += '<h2>Biography</h2>';
  domString += `<p>Computers have always been a passion of mine; more specifically how businesses and individuals interact and utilize them daily. 
  Computers have the ability to change the dynamic of everyday life at work and at home. I have spent most of my life working with computers in different personal, educational and business environments which has inspired me to want to learn more.
  Now I am pursuing a dream making a hobby into a career as a full-stack web developer.</p>`;
  domString += '</div>';
  utils.printToDom('bioDiv', domString);
};

export default { printBio };
