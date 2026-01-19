const text = "I build modern, responsive and interactive web interfaces.";
let index = 0;
const speed = 35;
const typingEl = document.getElementById("typingText");

function type() {
  if (index < text.length) {
    typingEl.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, speed);
  }
}
const spotlight = document.querySelector('.cursor-spotlight');

document.addEventListener('mousemove', (e) => {
  spotlight.style.left = `${e.clientX}px`;
  spotlight.style.top = `${e.clientY}px`;
});

type();
