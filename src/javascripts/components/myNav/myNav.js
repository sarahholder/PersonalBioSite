import utils from '../../helpers/utils';

const printNav = () => {
  let domString = '';
  domString += `
    <nav id="thisNavRocks" class="navbar navbar-expand-xl dropright fixed-top navbar-light bg-light pb-1 pl-5 pt-1 pr-5">
      <a class="navbar-brand center p-0 m-0" href="#footer"><h1 class="p-0">Sarah Holder</h1></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon white-text"></span>
      </button><div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <ul class="navbar-nav nav nav-pills">  
        <li class="nav-item">  
          <a class="nav-link pt-1" href="#top">Home</a>
        </li>  
        <li class="nav-item">  
          <a class="nav-link pt-1" href="#aboutDiv">About</a>
        </li>
        <li class="nav-item">  
          <a class="nav-link pt-1" href="#techDiv">Technologies</a>
        </li>  
        <li class="nav-item">  
          <a class="nav-link pt-1" href="#projectsDiv">Projects</a>
        </li>  
        <li class="nav-item">  
          <a class="nav-link pt-1" href="#footer">Contact</a>
      </li>  
      <ul>
        </div>`;
  utils.printToDom('myNav', domString);
};

export default { printNav };
