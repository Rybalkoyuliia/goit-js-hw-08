import throttle from 'just-throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
  const submitObject = {
    email: evt.target.elements.email.value,
    message: evt.target.elements.message.value,
  };

  console.log(submitObject);

  localStorage.removeItem('email');
  localStorage.removeItem('message');

  evt.target.reset();
}

function onFormInput(event) {
  const email = event.target.name;
  const value = event.target.value;

  localStorage.setItem(email, value);
}

function onPageReload() {
  const email = localStorage.getItem('email');
  const message = localStorage.getItem('message');

  form.elements.email.value = email;
  form.elements.message.value = message;
}
onPageReload();
