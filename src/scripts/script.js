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

const questions = document.querySelectorAll('.questions button');

questions.forEach((questionItem) => {
  questionItem.addEventListener('click', (event) => {
    const question = event.currentTarget;
    const controls = question.getAttribute('aria-controls');
    const answer = document.getElementById(controls);

    answer.classList.toggle('active');
    const active = answer.classList.contains('active');
    question.setAttribute('aria-expanded', active);
  });
});
