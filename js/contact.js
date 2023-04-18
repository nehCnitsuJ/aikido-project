// Get the reason for contact radio buttons and add a change event listener
const reasonForContact = document.querySelector("#reason-for-contact");
const supportOptions = document.querySelector("#support-options");
const supportCheckboxes = supportOptions.querySelectorAll(
  'input[type="checkbox"]'
);
reasonForContact.addEventListener("change", (event) => {
  // Show or hide the support options based on the selected reason for contact
  if (event.target.value === "support") {
    supportOptions.classList.remove("hidden");
  } else {
    supportOptions.classList.add("hidden");
    // Uncheck all the support option checkboxes when the support options are hidden
    supportCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
});
