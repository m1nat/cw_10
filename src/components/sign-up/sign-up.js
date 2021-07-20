import { signUp } from "../../api/api-handlers";
import {
  hidePasswordCompareError,
  hideusername,
  showPasswordCompareError,
  showusername,
} from "../../shared/error-handlers";
import { setUserEmail } from "../../shared/ls-service";
import {
  birthDateValidator,
  nameValidator,
  passwordStrengthController,
} from "../../shared/validators";

export const signUpHandler = () => {
  const signUpForm = document.querySelector(".sign-up__form");
  const password_1 = document.getElementById("password_1");
  const emailInput = document.getElementById("email-signUp");
  const password_2 = document.getElementById("password_2");
  const submit_btn = document.getElementById("sign-up-btn");
  const username = document.getElementById("username");
  const birthInput = document.getElementById('birth');
  let isFirstPasswordComplete = true;

  submit_btn.setAttribute("disabled", true);

  // signUpForm.addEventListener('submit', event => {
  //   event.preventDefault();

  //   const name = document.getElementById('name').value;
  //   const surname = document.getElementById('surname').value;
  //   const birth = document.getElementById('birth').value;
  //   const email = document.getElementById('email').value;
  //   const password = document.getElementById('password').value;

  //   signUp(email, password)
  //     .then( response => {
  //       if (response) {
  //         console.log(response.user.email);
  //         const { email } = response.user;
  //         setUserEmail(email);
  //       }
  //     });
  // });

  const formFields = {
    email: {
      isValid: false,
    },
    password_1: {
      isValid: false,
    },
    password_2: {
      isValid: false,
    },
    username: {
      isValid: false,
    },
    birth: {
      isValid: false
    }
  };

  username.oninput = () => {
    if (nameValidator(username.value)) {
      formFields.username.isValid = true;
      username.classList.remove("invalid");
    } else {
      formFields.username.isValid = false;
      username.classList.add("invalid");
    }
  };
  username.onblur = () => {
    if (!(nameValidator())) {
      showusername();
    } else {
      hideusername();
    }
  };

  emailInput.oninput = () => {
    if (emailValidator(emailInput.value)) {
      formFields.email.isValid = true;
      hideEmailErrorMessage();
    } else {
      showEmailErrorMessage();
      formFields.email.isValid = false;
    }
  };

  password_1.oninput = () => {
    const isPasswordComplete = passwordStrengthController(password_1.value);
  };

  password_2.oninput = () => {
    if (isFirstPasswordComplete && password_1.value === password_2.value) {
      submit_btn.removeAttribute("disabled");
      isValid.password_2 = true;
    } else {
      submit_btn.setAttribute("disabled", true);
      isValid.password_2 = false;
    }
  };

  password_2.onblur = () => {
    if (!(password_1.value === password_2.value)) {
      showPasswordCompareError();
      
    } else {
      hidePasswordCompareError();
    }
  };

  birthInput.oninput = () => {
    birthDateValidator(birthInput.value);
    formFields.birth = true
  };

};
