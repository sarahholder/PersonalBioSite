/* eslint-disable max-len */
import utils from '../../helpers/utils';
import './about.scss';

const printAbout = () => {
  let domString = '';
  domString += '<div class="myContainer">';
  domString += '<h2>About</h2>';
  domString += `<h4 class="text-center">Computers have always been a passion of mine; more specifically how businesses and individuals interact and utilize them daily. 
  Computers have the ability to change the dynamic of everyday life at work and at home. I have spent most of my life working with computers in different personal, educational and business environments which has inspired me to want to learn more.
  Now I am pursuing a dream making a hobby into a career as a full-stack web developer.</h4>`;
  domString += '</div>';
  utils.printToDom('aboutDiv', domString);
};

export default { printAbout };
