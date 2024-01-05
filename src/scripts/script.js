// Header menu page link selected

const links = document.querySelectorAll('.header-menu a');
links.forEach((link) => {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add(`active`);
  }
});

// Budget itens selection

const parameters = new URLSearchParams(location.search);

parameters.forEach((element) => {
  const budgetElement = document.getElementById(element);
  if (budgetElement) {
    budgetElement.checked = true;
  }
});

// Common questions



// questions.forEach((item) => {
//   item.addEventListener('click', (event) => {
//     const question = event.currentTarget;
//     const controls = question.getAttribute('aria-controls');
//     const answer = document.getElementById(controls);
//     answer.classList.toggle('active');
//     answer.setAttribute('aria-expanded', true);
//   });
// });
