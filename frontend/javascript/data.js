// --- data.json ---
const pageName = location.href.split("/").slice(-1)[0]
console.log(pageName)
const fetchJSON = (pathJSON) => {
  fetch(pathJSON).then(
      response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      }
  ).then(data => {
    myData = data;
    console.log("My Data:", myData);
    if (pageName === "index.html") {
      renderProjectCards(myData["portfolio"]);
    } else if (pageName === "resume.html") {
      renderResume();
    }
  }).catch(() => {
    this.dataError = true;
  });
}