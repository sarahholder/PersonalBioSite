/* eslint-disable max-len */
import utils from '../../helpers/utils';
import './about.scss';

const printAbout = () => {
  let domString = '';
  domString += '<h2>About</h2>';
  domString += '<div class="myContainer">';
  domString += `<h3 class="text-center">Working with computers has always been a passion of mine. They have the ability to change dynamics of everyday life at work and at home. I have spent much of my life working with computers in different personal, educational and business environments and being able to use computers to make everyday tasks easier is exciting. Identifying opportunities for improvement and making it happen is rewarding.
  As a full-stack developer, I am creating a life I have always wanted and truly enjoy.</h3>`;
  domString += '</div>';
  utils.printToDom('aboutDiv', domString);
};

export default { printAbout };
