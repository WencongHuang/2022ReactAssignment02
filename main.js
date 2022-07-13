let resetBtn = document.querySelector(".resetBtn");
let reloadBtn = document.querySelector(".reloadBtn");

let loadingBar = document.querySelector(".loadingBar");
let percentage = document.querySelector(".percentage");
let loadingText = document.querySelector(".loadingText");

// refresh the page for reset
resetBtn.addEventListener('click', function() {
  location.reload();
});

reloadBtn.addEventListener('click', function() {
  let number = 0;
  
  let timer = setInterval(() => {
    percentage.innerHTML = number++;
    loadingBar.style.width = String(number) + "%";
    if(number > 100) {
      clearInterval(timer);
      loadingText.innerHTML = "Finished!"
    }
  }, 50);
});