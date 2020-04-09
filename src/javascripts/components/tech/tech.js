import utils from '../../helpers/utils';
import './tech.scss';

const printTech = () => {
  let domString = '';
  domString += '<h2>Technologies</h2>';
  domString += '<div class="center">';
  domString += '<img class="logo" src="src/assets/ajax.png" alt="ajax logo">';
  domString += '<img class="logo" src="src/assets/bootstrap_logo.png" alt="bootstrap logo">';
  domString += '<img class="logo" src="src/assets/coffee.png" alt="coffee logo">';
  domString += '<img class="logo" src="src/assets/css.png" alt="css logo">';
  domString += '<img class="logo" src="src/assets/firebase.png" alt="firebase logo">';
  domString += '<img class="logo" src="https://tinyurl.com/yx4334ye" alt="github logo">';
  domString += '<img class="logo" src="src/assets/html5.png" alt="html5 logo">';
  domString += '<img class="logo" src="src/assets/jquery.png" alt="jquery logo">';
  domString += '<img class="logo" src="src/assets/js.png" alt="js logo">';
  domString += '<img class="logo" src="src/assets/ReactJS.png" alt="ReactJS logo">';
  domString += '<img class="logo" src="src/assets/sass.png" alt="sass logo">';
  domString += '</div>';
  utils.printToDom('techDiv', domString);
};

export default { printTech };
