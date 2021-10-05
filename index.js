const $form = document.querySelector("#form");
const $buttonMailTo = document.querySelector("#sendmail");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const form = new FormData(this);
  console.log(form.get("name"));
  $buttonMailTo.setAttribute(
    "href",
    `mailto:me@nicoperisic.dev?
    subject=${form.get("name")}
    Email ${form.get("email")}
    &body=${form.get("message")}`
  );
  $buttonMailTo.click();
}
