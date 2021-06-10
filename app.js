console.log(document.querySelector('.btn'));
console.log(document.querySelectorAll('.btn'));

console.log(document.getElementById('dont-click-me'));

const clickFunc = () => {
  document.querySelector('.secret').style.display = 'block';
  document.getElementById('dont-click-me').innerHTML = 'Click Me Now';
};

document.getElementById('click-me').addEventListener('click', clickFunc);

document.getElementById('dont-click-me').addEventListener('click', () => {
  document.getElementById('click-me').removeEventListener('click', clickFunc);
  document.querySelector('.secret').style.display = 'none';
  document.getElementById('dont-click-me').innerHTML = "Don't Click Me";
  document.getElementById('click-me').innerHTML = 'Try Me';
});

// super important comment
