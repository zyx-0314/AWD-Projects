const scrollIndicator = document.getElementById('_indicator');

const totalScrollHeight = document.body.scrollHeight - window.innerHeight;

function UpdateScrollIndicator() {
  const newScrollHeight = (window.scrollY / totalScrollHeight) * 100;
  scrollIndicator.style.width = `${newScrollHeight}%`;
}

window.addEventListener('scroll', UpdateScrollIndicator);