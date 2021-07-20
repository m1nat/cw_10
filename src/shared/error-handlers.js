import { ERROR_MESSAGES } from '../shared/constants/error-messages';

export const showPasswordLengthErrorMessage = () => {
  const errorTag = document.getElementById('passwordLengthError');
  errorTag.style.display = 'block';
  errorTag.innerText = ERROR_MESSAGES.password_length;
};

export const hidePasswordLengthErrorMessage = () => {
  const inputErrorTag = document.getElementById('passwordLengthError');
  inputErrorTag.style.display = 'none';
};

export const showEmailErrorMessage = () => {
  const errorTag = document.getElementById('emailError');
  errorTag.style.display = 'block';
  errorTag.innerText = ERROR_MESSAGES.email;
};

export const hideEmailErrorMessage = () => {
  const inputErrorTag = document.getElementById('emailError');
  inputErrorTag.style.display = 'none';
};

export const showErrorNotification = error => {
  const notification = document.createElement('div');
  const body = document.getElementsByTagName('body')[0];
  notification.innerText = error.response.data.error.message;
  notification.className = 'error-notification';
  body.append(notification);
  setTimeout( () => notification.style.display = 'none', 5000);
};

export const showPasswordCompareError = () => {
  const errorTag = document.getElementById('passwordCompareError');
  errorTag.style.display = 'block';
  errorTag.innerText = ERROR_MESSAGES.passwordsCompare;
};

export const hidePasswordCompareError = () => {
  const errorTag = document.getElementById('passwordCompareError');
  errorTag.style.display = 'none';
  errorTag.innerText = ERROR_MESSAGES.passwordsCompare;
};

export const showusername = () => {
  const errorTag = document.getElementById('userError');
  errorTag.style.display = 'block';
  errorTag.innerText = ERROR_MESSAGES.username;
};

export const hideusername = () => {
  const errorTag = document.getElementById('userError');
  errorTag.style.display = 'none';
  errorTag.innerText = ERROR_MESSAGES.username;
}
