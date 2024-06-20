const skills_wrap = document.querySelector('.skills');
const skills_bars = document.querySelectorAll('.skill-progress');
const filter_btns = document.querySelectorAll('.filter-btn');
const imageContainers = document.querySelectorAll('.gallery-image');


var elem = document.querySelector('.grid');

var iso = new Isotope(elem, {
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  transionDuration: '0.6s',
});

iso.arrange({ filter: '.team' });

filter_btns.forEach((btn) =>
  btn.addEventListener('click', () => {
    filter_btns.forEach((button) => button.classList.remove('active'));
    btn.classList.add('active');

    let filterValue = btn.dataset.filter;
    iso.arrange({ filter: filterValue });
  })
);

checkScroll(skills_wrap);

window.addEventListener('scroll', () => {
  skillsEffect();
});

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}

function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}