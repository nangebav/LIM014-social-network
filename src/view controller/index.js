/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { components } from '../view/index.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '#/': { return container.appendChild(components.login()); }
    case '': { return container.appendChild(components.login()); }
    case '#/register': { return container.appendChild(components.register()); }
    case '#/home': { return container.appendChild(components.home()); }
    default:
      return container.appendChild(components.error());
     // break;
  }
  // console.log(route);
};

export { changeView };
