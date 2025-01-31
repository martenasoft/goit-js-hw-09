const formData = {
  email: '',
  message: ''
};

const STORAGE_KEY = 'feedback-form-state';
const saveForm = (element) => {
  const fromElement = element.target;
  if (fromElement.tagName === undefined || !['INPUT', 'TEXTAREA'].includes(fromElement.tagName)) {
    return;
  }

  const value = fromElement.value.trim();
  formData[fromElement.name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

const loadForm = (form) => {
  const data = localStorage.getItem(STORAGE_KEY);

  if (data === null) {
    return;
  }

  const parsedData = JSON.parse(data);
  if (parsedData.email === undefined || parsedData.message === undefined) {
    return;
  }

  form.email.value = parsedData.email;
  form.message.value = parsedData.message;
}

const submitForm = (event) => {
  event.preventDefault();
  const form = event.target;

  if (form.email.value === '' || form.message.value === '') {
    console.warn("Fill please all fields");
    return;
  }

  form.message.value = form.email.value = '';
  localStorage.removeItem(STORAGE_KEY);

};

export function handleFrom(form) {
  loadForm(form);
  form.addEventListener('input', saveForm);
  form.addEventListener('submit', submitForm)
}