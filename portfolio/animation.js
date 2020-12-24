const { styler, spring, listen, pointer, value } = window.popmotion;

const ballBg = document.querySelector('.bg');
const divStylerBg = styler(ballBg);
const ballBgXY = value({ x: 0, y: 0 }, divStylerBg.set);

const ballEng = document.querySelector('.eng');
const divStylerEng = styler(ballEng);
const ballEngXY = value({ x: 0, y: 0 }, divStylerEng.set);

const ballEsp = document.querySelector('.esp');
const divStylerEsp = styler(ballEsp);
const ballEspXY = value({ x: 0, y: 0 }, divStylerEsp.set);

const ballDe = document.querySelector('.de');
const divStylerDe = styler(ballDe);
const ballDeXY = value({ x: 0, y: 0 }, divStylerDe.set);
  

let ball = [ballBg, ballEng, ballEsp, ballDe];
let pos = [ballBgXY, ballEngXY, ballEspXY, ballDeXY];

let ballCount = 4;

// not working tween:

// const { css, easing, tween } = window.popmotion;
// const ballRenderer = css(ballBg);

// let isClicked = false;

// ballBg.addEventListener('click', function(event) {
//   isClicked = true;
// })
// console.log(isClicked);
// if (isClicked === false) {
 
//   tween({
//     from: 0,
//     to: -15,
//     yoyo: Infinity,
//     duration: 575,
//     ease: easing.easeOut,
//   }).start((v) => ballRenderer.set('y', v)); 
// }


for (let i = 0; i < ballCount; i++) {
    listen(ball[i], 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(pos[i].get()).start(pos[i]);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: pos[i].get(),
      velocity: pos[i].getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      // mass: 1,
      // damping: 10
    }).start(pos[i]);
  });
}

