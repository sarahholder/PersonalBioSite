import utils from '../helpers/utils';
import './imageHeading.scss';

const printImageHeading = () => {
  let domString = '';
  domString += '<div class="imgbox container">';
  domString += '<img class="img-fluid rounded mx-auto d-block" width="100%" src="https://tinyurl.com/sarahHolderWebsitePicture" alt="Sarah Holder">';
  domString += '</div>';
  utils.printToDom('printImageDiv', domString);
};
export default { printImageHeading };
