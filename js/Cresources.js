//runs when page is loaded
document.addEventListener("DOMContentLoaded", function () {
  //Getting section to show from params
  const queryString = window.location.search;
  console.log(queryString);
  //Store params for access
  const urlParams = new URLSearchParams(queryString);
  //Get section param to show
  const section = urlParams.get("section");
  console.log(section);
  //section is hbl
  if (section == "hbl") {
    document.getElementById("hblBtn").click();
  }
  //If section is gr
  else if (section == "gr") {
    document.getElementById("grBtn").click();
  }
  //Default section
  else {
    document.getElementById("ebBtn").click();
  }
});

function triggerSection(event) {
  var btns = document.getElementsByClassName("btnSU");
  var contents = document.getElementsByClassName("main-content");

  Array.from(btns).forEach((btn) => {
    btn.classList.remove("focus");
  });

  Array.from(contents).forEach((content) => {
    content.classList.add("hidden");
  });

  //If event exist
  if (event) {
    if (event.target.id === "grBtn") {
      document.getElementById("gr").classList.remove("hidden");
      document.getElementById("grBtn").classList.add("focus");
    } else if (event.target.id === "hblBtn") {
      document.getElementById("hbl").classList.remove("hidden");
      document.getElementById("hblBtn").classList.add("focus");
    } else {
      document.getElementById("eb").classList.remove("hidden");
      document.getElementById("ebBtn").classList.add("focus");
    }
  }
}
