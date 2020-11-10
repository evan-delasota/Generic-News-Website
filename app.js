const title = document.querySelector('.brand');
const string = title.textContent;
const splitText = string.split("");

title.textContent = "";
let char = 0;
let timer = setInterval(onTick, 50);

for (let i = 0; i < splitText.length; ++i) {
	title.innerHTML += "<span>" + splitText[i] + "</span>";
}

function onTick() {
	const span = title.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;
  
  if (char === splitText.length) {
  	complete();
    return;
  }
  
}

function complete() {
	clearInterval(timer);
  timer = null;
}

