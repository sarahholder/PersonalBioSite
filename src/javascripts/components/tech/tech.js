/* eslint-disable max-len */
import utils from '../../helpers/utils';
import './tech.scss';

const printTech = () => {
  let domString = '';
  domString += '<div class="myContainer">';
  domString += '<h2>Technologies</h2>';
  domString += '<div class="text-center d-flex flex-wrap align-content-center justify-content-center">';
  domString += '<i class="iTech devicon-javascript-plain colored"></i>';
  domString += '<i class="iTech devicon-bootstrap-plain-wordmark colored"></i>';
  domString += '<i class="iTech devicon-css3-plain-wordmark colored"></i>';
  domString += '<i class="iTech devicon-github-plain-wordmark"></i>';
  domString += '<i class="iTech devicon-nodejs-plain colored"></i>';
  domString += '<i class="iTech fab fa-npm"></i>';
  domString += '<i class="iTech devicon-react-original-wordmark colored"></i>';
  domString += '<i class="iTech devicon-sass-original colored"></i>';
  domString += '<i class="iTech fab fa-slack"></i>';
  domString += '<i class="iTech devicon-jquery-plain-wordmark colored"></i>';
  domString += '<i class="iTech devicon-html5-plain-wordmark colored"></i>';
  domString += '<i class="iTech devicon-visualstudio-plain colored"></i>';
  domString += '<i class="iTech fab fa-markdown"></i>';
  domString += '<i class="iTech devicon-webpack-plain colored"></i>';
  domString += '<img class="techIcon" src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png">';
  domString += '<img class="moqupIcon" src="https://landing.moqups.com/img/logo@2x.png">';
  domString += '<img class="techIcon" src="https://cdn.changelog.com/uploads/icons/topics/9Rl/icon_large.png?v=63682389456">';
  domString += '<img class="techIcon" src="https://eslint.org/assets/img/favicon.512x512.png">';
  domString += '<img class="techIcon" src="https://i.pinimg.com/originals/fd/25/f2/fd25f2a682d05f0fbebe84412c4d730e.png">';
  domString += '<img src="">';
  domString += '</div>';
  utils.printToDom('techDiv', domString);
};

export default { printTech };
