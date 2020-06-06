/* eslint-disable max-len */
import utils from '../../helpers/utils';
import './tech.scss';

const printTech = () => {
  let domString = '';
  domString += '<h2>Technologies</h2>';
  domString += '<div class="center">';
  domString += '<img class="logo" src="https://tinyurl.com/ajaxIcon-sh" alt="ajax logo">';
  domString += '<img class="logo" src="https://tinyurl.com/bootstrapIcon" alt="bootstrap logo">';
  domString += '<img class="logo" src="https://tinyurl.com/wa6zqu4" alt="coffee logo">';
  domString += '<img class="logo" src="https://lh3.googleusercontent.com/pw/ACtC-3f50gK62gjTbPOR0TLEFIKhTIQC0o3P0lvIE6MpW-ykjWyurYb1J68PIGQ4d9U-yNIt6WjWH2n9YxYZZm0d3UiFBNNMrA3q7A_qt427qS1PVrX7UXdbm9y_j8DmPMCs6rPIVfAv5N3Y8sPDn5P08GQr=s1024-no?authuser=0" alt="css logo">';
  domString += '<img class="logo" src="https://tinyurl.com/firebaseYellow" alt="firebase logo">';
  domString += '<img class="logo" src="https://lh3.googleusercontent.com/pw/ACtC-3cSgtBLokJI71bTF6FUpYc1Qm44MCcefQKoVatvS9tRaKoo6f5pIJzfj7Ccp0vJWCfmBqEdvE00PP73UykC3dCBNMXcyp8pjXaTQqmj--rbaU8l6S6sNDjCyWvwWKLFZtzah0mruGGcQ_CWoc5jeIBg=w380-h399-no?authuser=0" alt="github logo">';
  domString += '<img class="logo" src="https://tinyurl.com/html5Icon-sh" alt="html5 logo">';
  domString += '<img class="logo" src="https://tinyurl.com/jqueryIcon-sh" alt="jquery logo">';
  domString += '<img class="logo" src="https://tinyurl.com/whknfa9" alt="js logo">';
  domString += '<img class="logo" src="https://lh3.googleusercontent.com/pw/ACtC-3d_IM809KWzEx8_S8sr-rDKAEV_yyZ2ZcHiuZf-Y0IOlHjbRfY9M9IHtflZ59NadQgMzACkQXJtuRqRVIKgqVbEV3fguirwijtRtDz1o2oesEOEtYzlSHwLy_XcnOgLgdzM2hlUAp9oSQkQia_Dybbv=s500-no?authuser=0" alt="ReactJS logo">';
  domString += '<img class="logo" src="https://tinyurl.com/sdlxlbw" alt="sass logo">';
  domString += '</div>';
  utils.printToDom('techDiv', domString);
};

export default { printTech };
