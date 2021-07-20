import moment from 'moment';

import { REGEXP } from './constants/regexp';
import { PASSWORD_STRENGTHS, VALIDATION_MESSEGES } from '../shared/constants/common';


export const passwordLengthValidator = password => password.match(REGEXP.PASSWORD_LENGTH);

export const emailValidator = email => email.match(REGEXP.EMAIL);

export const nameValidator = username => username.match(REGEXP.NAME); 

export const birthDateValidator = birth => {
  const currentDate = moment(birth);
  console.log(currentDate);
};

const validation_status = document.querySelector('.sign-up__form-password-strength-status-current');

const lowerCaseCheck = password => {
  const validation_info = document.querySelector('.sign-up__form-password-strength-status-info-lowercase');
  const result = REGEXP.LOWER_CASE.test(password);
  result ? validation_info.style.color = 'blue' :
  validation_info.style.color = 'grey';
  validation_info.innerText = VALIDATION_MESSEGES.lowercase;

  return REGEXP.LOWER_CASE.test(password);
};

const upperCaseCheck = password => {
  const validation_info = document.querySelector('.sign-up__form-password-strength-status-info-uppercase');
  const result = REGEXP.UPPER_CASE.test(password);
  result ? validation_info.style.color = 'blue' :
  validation_info.style.color = 'grey';
  validation_info.innerText = VALIDATION_MESSEGES.uppercase;

  return REGEXP.UPPER_CASE.test(password)
};

const numberCheck = password => {
  const validation_info = document.querySelector('.sign-up__form-password-strength-status-info-numbers');
  const result = REGEXP.NUMBERS.test(password);
  result ? validation_info.style.color = 'blue' :
  validation_info.style.color = 'grey';
  validation_info.innerText = VALIDATION_MESSEGES.numbers;

  return REGEXP.NUMBERS.test(password)
};

const eightCharactersCheck = password => {
  const validation_info = document.querySelector('.sign-up__form-password-strength-status-info-character');
  const result = REGEXP.EIGHT_CHARACTERS.test(password);
  result ? validation_info.style.color = 'blue' :
  validation_info.style.color = 'grey';
  validation_info.innerText = VALIDATION_MESSEGES.characters;
  
  return REGEXP.EIGHT_CHARACTERS.test(password)
};

export const passwordStrengthController = password => {
  let passwordStrength;
  const password_str_block = document.querySelector('.sign-up__form-password-strength');

  password_str_block.style.display = 'block'

  const passwordStrengthNum =
    lowerCaseCheck(password) +
    upperCaseCheck(password) +
    numberCheck(password) +
    eightCharactersCheck(password);

  Object.keys(PASSWORD_STRENGTHS).forEach( item => {
    if (PASSWORD_STRENGTHS[item] === passwordStrengthNum) {
      passwordStrength = item;
    }
  });

  const filler = document.querySelector('.sign-up__form-password-strength-status-filler');

  switch (passwordStrengthNum) {
    case 1:
      filler.classList.add('weak');
      filler.classList.remove('moderate');
      validation_status.innerText = 'Weak';
      validation_status.className='sign-up__form-password-strength-status-current-weak';
      break;
    case 2:
      filler.classList.add('moderate');
      filler.classList.remove('strong');
      validation_status.innerText = 'Moderate'
      validation_status.className ='sign-up__form-password-strength-status-current-moderate';
      break;
    case 3:
      filler.classList.add('strong');
      filler.classList.remove('veryStrong');
      validation_status.innerText = 'Strong'
      validation_status.className = 'sign-up__form-password-strength-status-current-strong';
      break;
    case 4:
      filler.classList.add('veryStrong');
      validation_status.innerText = 'Complete'
      validation_status.className='sign-up__form-password-strength-status-current-complete';
      break;
    default:
      filler.classList.remove('weak');
      break;
  }

    return passwordStrengthNum === 4
};
