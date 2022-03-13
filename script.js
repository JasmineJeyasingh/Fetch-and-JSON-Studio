// TODO: add code here
window.addEventListener("load", function () {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (json) {
      let sortedAstronaut = json.sort(function (a, b) {
        return b.hoursInSpace - a.hoursInSpace;
      });
      let astronaut = document.getElementById("container");

      astronaut.innerHTML += `<h3>Astronaut Count: ${sortedAstronaut.length}</h3>`;
      sortedAstronaut.forEach(function (list) {
        let myHtml = `
        <div class="astronaut">
        <div class="bio">
           <h3>${list.firstName} ${list.lastName}</h3>
           <ul>
              <li>Hours In Space: ${list.hoursInSpace}</li>
              <li ${list.active ? "style='color: green'" : ""}>Active: ${
          list.active
        }</li>
              <li>Skills: ${list.skills.join(", ")}</li>
           </ul>
        </div>
        <img class="avatar" src="${list.picture}">
     </div>`;
        astronaut.innerHTML += myHtml;
      });
    });
  });
});
