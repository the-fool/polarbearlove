const f1 = document.querySelector('#frame-1');
const f2 = document.querySelector('#frame-2');
const f3 = document.querySelector('#frame-3');
const f4 = document.querySelector('#frame-4');

function doFrame1() {
  const p1 = document.querySelector('#frame-1 p');
  p1.style.opacity = 1;

  setTimeout(function () {
    doFrame2();
  }, 6000);
}

function doFrame2() {
  f1.style.display = 'none';
  f2.style.display = 'block';

  setTimeout(function () {
    f2.querySelector('p').style.opacity = 1;
  }, 500);

  setTimeout(function () {
    doFrame3();
  }, 6000);
}


function doFrame3() {
  f2.style.display = 'none';
  f3.style.display = 'block';

  setTimeout(function () {
    f3.querySelector('p').style.opacity = 1;
  }, 500);

  setTimeout(function() {
    doFrame4();
  }, 6000);
}

function doFrame4() {
  f3.style.display = 'none';
  f4.style.display = 'block';

  setTimeout(function() {
    f4.querySelector('p').style.opacity = 1;
  }, 500);
}

setTimeout(function () {
  doFrame1();
}, 2000);