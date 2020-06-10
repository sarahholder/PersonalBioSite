/* eslint-disable max-len */
import utils from '../../helpers/utils';
import './about.scss';

const printAbout = () => {
  let domString = '';
  domString += '<div class="myContainer">';
  domString += '<h2>About</h2>';
  domString += `<h3 class="text-center">Working with computers have always been a passion of mine. They have the ability to change dynamics of everyday life at work and at home. I have spent most of much of my life working with computers in different personal, educational and business environments which has inspired me to want to learn more.
  Now I am pursuing a dream making a hobby into a career as a full-stack web developer.</h3>`;
  domString += '</div>';
  utils.printToDom('aboutDiv', domString);
};

export default { printAbout };
