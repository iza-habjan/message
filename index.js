document.querySelector("form").addEventListener("submit", (event) => {
  // to prevent default browser action of submiting the form to some backend server
  event.preventDefault();

  const input = document.querySelector("input");
  console.log(input.value);
});
