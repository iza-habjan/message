document.querySelector("form").addEventListener("submit", (event) => {
  // to prevent default browser action of submiting the form to some backend server
  event.preventDefault();

  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);

  document.querySelector("#link-input").value = encrypted;
});
