export default () => {
  const errorPage = `
    <div class="errorPage">
      <div class="box">
      <div class="box__ghost">
          <div class="symbol"></div>
          <div class="symbol"></div>
          <div class="symbol"></div>
          <div class="symbol"></div>
          <div class="symbol"></div>
          <div class="symbol"></div>
  
          <div class="box__ghost-container">
          <div class="box__ghost-eyes">
              <div class="box__eye-left"></div>
              <div class="box__eye-right"></div>
          </div>
          <div class="box__ghost-bottom">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
          </div>
          <div class="box__ghost-shadow"></div>
      </div>
      <div class="box__description">
          <div class="box__description-container">
          <div class="box__description-title">Whoops!</div>
          <div class="box__description-text">Parece que no pudimos encontrar la página que buscaba</div>
          </div>
          
          <a href="#/" target="_blank" class="box__button">Regresar</a>
          
      </div>
      </div>
    </div>
  
  `;
  const divElem = document.createElement('div');
  divElem.innerHTML = errorPage;

  // based on https://dribbble.com/shots/3913847-404-page

  //   const pageX = $(document).width();
  //   const pageY = $(document).height();
  //   let mouseY = 0;
  //   let mouseX = 0;

  //   $(document).mousemove((event) => {
  //     // verticalAxis
  //     mouseY = event.pageY;
  //     yAxis = (pageY / 2 - mouseY) / pageY * 300;
  //     // horizontalAxis
  //     mouseX = event.pageX / -pageX;
  //     xAxis = -mouseX * 100 - 100;

  //     $('.box__ghost-eyes').css({ transform: `translate(${xAxis}%,-${yAxis}%)` });

  //     // console.log('X: ' + xAxis);
  //   });
  return divElem;
};
