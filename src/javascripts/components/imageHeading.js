import utils from '../helpers/utils';
import './imageHeading.scss';

const printImageHeading = () => {
  let domString = '';
  domString += '<div class="imgbox">';
  domString += '<img class="img-fluid" src= "src/assets/sarahHolder.png" alt="Sarah Holder">';
  domString += '</div>';
  utils.printToDom('printImageDiv', domString);
};

export default { printImageHeading };
