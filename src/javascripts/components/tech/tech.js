import utils from '../../helpers/utils';
import './tech.scss';

const printTech = () => {
  let domString = '';
  domString += '<h2>Technologies</h2>';
  domString += '<div class="center">';
  domString += '<img class="logo" src="https://tinyurl.com/ajaxIcon-sh" alt="ajax logo">';
  domString += '<img class="logo" src="https://tinyurl.com/bootstrapIcon" alt="bootstrap logo">';
  domString += '<img class="logo" src="https://tinyurl.com/wa6zqu4" alt="coffee logo">';
  domString += '<img class="logo" src="https://tinyurl.com/wfhukyb" alt="css logo">';
  domString += '<img class="logo" src="https://tinyurl.com/firebaseYellow" alt="firebase logo">';
  domString += '<img class="logo" src="https://tinyurl.com/yx4334ye" alt="github logo">';
  domString += '<img class="logo" src="https://tinyurl.com/html5Icon-sh" alt="html5 logo">';
  domString += '<img class="logo" src="https://tinyurl.com/jqueryIcon-sh" alt="jquery logo">';
  domString += '<img class="logo" src="https://tinyurl.com/whknfa9" alt="js logo">';
  domString += '<img class="logo" src="https://tinyurl.com/reactJsIcon-sh" alt="ReactJS logo">';
  domString += '<img class="logo" src="https://tinyurl.com/sdlxlbw" alt="sass logo">';
  domString += '</div>';
  utils.printToDom('techDiv', domString);
};

export default { printTech };
