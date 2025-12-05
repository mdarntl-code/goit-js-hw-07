const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");

inputEl.addEventListener("input", (evt) => {
  const value = evt.currentTarget.value.trim();
  value === ""
    ? (spanEl.textContent = "Anonymous")
    : (spanEl.textContent = value);
});
