import {components} from './components.js';
export const viewTemplate = (routes)=>{
const container = document.getElementById('container');
container.innerHTML = '';
switch (routes) {
  case '#/':
    container.appendChild(components.viewFirst());
    break;
  case '#/second':
    container.appendChild(components.viewSecond());
    break;
  default:
    container.appendChild(components.viewFirst());
    break;
}}