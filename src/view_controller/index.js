import { components } from '../view/index';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '#/': { return container.appendChild(components.login()); }
    case '#/register': { return container.appendChild(components.register()); }
    default:
      break;
  }
  console.log(route);
};

export { changeView };
