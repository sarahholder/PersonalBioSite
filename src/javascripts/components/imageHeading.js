import utils from '../helpers/utils';
import './imageHeading.scss';

const printImageHeading = () => {
  let domString = '';
  domString += '<div class="imgbox">';
  domString += '<img class="img-fluid rounded mx-auto d-block" src="https://tinyurl.com/uz6h5jv" alt="Sarah Holder">';
  domString += '</div>';
  utils.printToDom('printImageDiv', domString);
};
export default { printImageHeading };
