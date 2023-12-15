import throttle from 'lodash.throttle';

const getFormValue = JSON.parse(localStorage.getItem('feedback-form-state'));

const form = document.querySelector('.feedback-form');
let formValue = {};

if (getFormValue) {
  form.elements.email.value = getFormValue.email || '';
  form.elements.message.value = getFormValue.message || '';
  formValue = getFormValue;
}

const hangleChange = evt => {
  const { name, value } = evt.target;
  formValue[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
};

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formValue);
  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
  formValue = {};
}

form.addEventListener('input', throttle(hangleChange, 500));
form.addEventListener('submit', onFormSubmit);
