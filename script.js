const menu = document.querySelector(".header__left");
const btnMenu = document.querySelector(".header__nav__toggle");
const btnClose = document.querySelector(".close");

const toggleMenu = () => menu.classList.toggle("header__left--active");

btnMenu.onclick = toggleMenu;
btnClose.onclick = toggleMenu;

document.querySelectorAll(".hero--anim-up").forEach((el) => {
  el.classList.add("anim-slide-up");
});

document.querySelectorAll(".what-is-gpt3--anim-fade-in").forEach((el) => {
  el.classList.add("anim-fade-in");
});

intersectionObserverHelper(".blog", (el) => {
  el.querySelectorAll(".blog-post").forEach((el) =>
    el.classList.add("anim-move-up")
  );
});

intersectionObserverHelper(".move-up", (el) => {
  el.classList.add("anim-move-up");
});

intersectionObserverHelper(".text--early-access", (el) => {
  el.classList.add("anim-zoom");
  el.onanimationend = () => (el.style.display = "inline");
});

intersectionObserverHelper(".card", (el) => {
  el.querySelectorAll(".card__title,p").forEach((el) =>
    el.classList.add("anim-move-up")
  );
});

function intersectionObserverHelper(query, onIntersecting) {
  const observer = new IntersectionObserver((entries, self) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        onIntersecting(el);
        self.unobserve(el);
      }
    });
  });

  document.querySelectorAll(query).forEach((el) => observer.observe(el));
}
