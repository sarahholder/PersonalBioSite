import utils from '../helpers/utils';
import './imageHeading.scss';

const printImageHeading = () => {
  let domString = '';

  domString += `
  <div class="frame">
    <div class="picture"></div>
    <div class="social email">
        <a href="mailto:sr.holder@yahoo.com" target="sr.holder@yahoo.com">
          <i class="fas fa-envelope-square"></i>
        </a>
      </div>
      <div class="social twitter">
        <a href="https://github.com/sarahholder" target="https://github.com/sarahholder">
          <i class="fab fa-github-square"></i>
        </a>
      </div>
      <div class="social linkedin">
        <a href="https://www.linkedin.com/in/sarah-holder-nashville/" target="https://www.linkedin.com/in/sarah-holder-nashville/">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
      <div class="social codepen">
        <a href="tel:850-774-6453" target="850-774-6453">
        <i class="fas fa-phone-square-alt"></i>
        </a>
      </div>
  </div>`;
  utils.printToDom('printImageDiv', domString);
};
export default { printImageHeading };
