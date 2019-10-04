import {viewTemplate} from './router.js';
const init = () => {
  viewTemplate(window.location.hash);
  window.addEventListener('hashchange', () => viewTemplate(window.location.hash));
};

window.addEventListener('load', init);
