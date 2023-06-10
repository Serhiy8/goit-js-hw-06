const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   const email = form.elements.email.value;
//   const password = form.elements.password.value;

//   if (email === "" || password === "") {
//     return alert("All fields must be filled");
//   } else {
//     const formInputObject = {
//       email,
//       password,
//     };
//     console.log(formInputObject);
//   }
//   event.currentTarget.reset();
// }

// ----------------------------інший варіант-------------------------

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled");
  } else {
    const formInputObject = {
      email: email.value,
      password: password.value,
    };
    console.log(formInputObject);
  }
  event.currentTarget.reset();
}
