let resetBtn = document.querySelector(".resetBtn");
let reloadBtn = document.querySelector(".reloadBtn");
let pauseBtn = document.querySelector(".pauseBtn");

let loadingBar = document.querySelector(".loadingBar");
let loadingText = document.querySelector(".loadingText");

let pause = false;
let number = 0;

// have this to run when the page load up
let timer = setInterval(() => {
  if(!pause) {
    loadingText.innerHTML = `${number++}%`;
    loadingBar.style.width = String(number) + "%";
  }
  if(number >= 100) {
    clearInterval(timer);
    loadingText.innerHTML = "Finished!";
    pauseBtn.disabled = true;
  }
}, 25);

// reset all the variables
let resetVar = () => {
  clearInterval(timer);
  number = 0;
  loadingText.innerHTML = `${number}%`;
  loadingBar.style.width = "0%";
  pause = false;
  pauseBtn.innerHTML = "Pause";
  pauseBtn.disabled = false;
};

resetBtn.addEventListener('click', function() {
  resetVar();
});

reloadBtn.addEventListener('click', function() {
  resetVar();

  timer = setInterval(() => {
    if(!pause) {
      loadingText.innerHTML = `${number++}%`;
      loadingBar.style.width = String(number) + "%";
    }
    if(number >= 100) {
      clearInterval(timer);
      loadingText.innerHTML = "Finished!";
      pauseBtn.disabled = true;
    }
  }, 25);
});

pauseBtn.addEventListener('click', function() {
  pause = !pause;
  if(pause) {
    pauseBtn.innerHTML = "Resume";
  }else{
    pauseBtn.innerHTML = "Pause";
  }
});