const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const formData = {
    email: formEl.elements.email.value.trim(),
    password: formEl.elements.password.value.trim(),
  };
  if (formData.email === "" || formData.password === "") {
    alert("All form fields must be filled in");
    return;
  }

  console.log(formData);
  formEl.reset();
});
