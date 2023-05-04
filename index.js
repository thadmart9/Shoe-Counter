let countEl = document.getElementById("count");

function increment() {
  countEl.innerText = parseInt(countEl.innerText) + 1;
}

function decrease() {
  let count = parseInt(countEl.innerText);
  if (count > 1) {
    countEl.innerText = count - 1;
  } else {
    countEl.innerText = 1;
  }
}