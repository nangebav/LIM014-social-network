/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { components } from '../view/index.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '#/': { return container.appendChild(components.login()); }
    case '#/register': { return container.appendChild(components.register()); }
    case '': { return container.appendChild(components.login()); }
    default:
      break;
  }
  console.log(route);
};

export { changeView };
