const projectCards = document.getElementById("project-cards");
// const triangleEl = document.getElementById("triangle");
const filterList = document.getElementById("filter-list");
const typeFilter = document.getElementById("type-filter");
const languageFilter = document.getElementById("language-filter");
const frameworkFilter = document.getElementById("framework-filter");
let myData

fetchJSON("./fcc-javascript/fcc-javascript.json")

const capitalizeEachWord = (str) => str.split("-").map(
  word => word[0].toUpperCase() + word.substring(1)
).join("-")

function renderProjectCards(objArray) {
  objArray.forEach((obj) => {
    projectCards.innerHTML += `
      <a href="fcc-javascript/${obj.number}-${obj.id}/index.html"><div class="card">
        <h2>${obj.name}</h2>
        <p>${capitalizeEachWord(obj.type)} Project</p>
        <p>${obj.description}</p>
        <p>Languages: ${obj.languages}</p>
        <p>
          <a href="https://github.com/gspider8/fcc-javascript/tree/main/${obj.number}-${obj.id}/"
            target="_blank">Source Code
          </a> | 
          <a href="fcc-javascript/${obj.number}-${obj.id}/index.html">Preview</a></p>
      </div></a>`
  })
}

const filterProjects = () => {
  projectCards.innerHTML = "";

  const filterByType = (projectCard) => {
    if (typeFilter.value === "all" || typeFilter.value === "0") {
      return true
    } else {
      return typeFilter.value === projectCard.type;
    }
  }

  const filterByLanguage = (projectCard) => {
    if (languageFilter.value === "all" || languageFilter.value === "0") {
      return true;
    } else {
      console.log(projectCard.languages.includes(languageFilter.value));
      console.log(languageFilter.value)
      return projectCard.languages.includes(languageFilter.value);
      // const languagesArray = projectCard.languages.toLowerCase().split(", ")
      // return languagesArray.includes(languageFilter.value);
    }
  }

  const filterByFramework = (projectCard) => {
    if (frameworkFilter.value === "all" || frameworkFilter.value === "0") {
      return true
    } else if (projectCard.hasOwnProperty("frameworks")) {
      console.log()
      return projectCard?.frameworks.includes(frameworkFilter.value);
    } else {
      return false
    }
  }

  renderProjectCards(myData["portfolio"].filter(
    project => filterByType(project)
      && filterByLanguage(project)
      && filterByFramework(project)
  ))
}

typeFilter.addEventListener("change", filterProjects)
languageFilter.addEventListener("change", filterProjects)
frameworkFilter.addEventListener("change", filterProjects)

createTriangleDropdown("filter-dropdown")






// ARCHIVE

// filterDropdown.addEventListener("click", () => {
//   filterList.classList.toggle("hidden");
//
//   if (triangleEl.innerHTML.charCodeAt(0) === 9660) {
//     triangleEl.innerHTML = "&#" + 9650 + ";";
//   } else {
//     triangleEl.innerHTML = "&#9660;";
//   }
//
// })

// console.log(myPortfolio);
// myPortfolio = [
//   {
//     name: "Dragon Fighting RPG",
//     id: "dragon-rpg",
//     type: "front-end",
//     description: "FreeCodeCamp JavaScript Course",
//     languages: "HTML, CSS, JavaScript",
//     number: 3,
//     frameworks: []
//   },
//   {
//     name: "Random Background Color",
//     id: "random-background-color",
//     type: "front-end",
//     description: "FreeCodeCamp JavaScript Course",
//     languages: "HTML, CSS, JavaScript",
//     number: 4
//   },
//   {
//     name: "Calorie Counter",
//     id: "calorie-counter",
//     type: "front-end",
//     description: "FreeCodeCamp JavaScript Course",
//     languages: "HTML, CSS, JavaScript",
//     number: 5
//   },
//   {
//     name: "Rock Paper Scissors",
//     id: "rock-paper-scissors",
//     type: "front-end",
//     description: "FreeCodeCamp JavaScript Course",
//     languages: "HTML, CSS, JavaScript",
//     number: 6
//   },
//   {
//     name: "Music Player",
//     id: "music-player",
//     type: "front-end",
//     description: "FreeCodeCamp JavaScript Course",
//     languages: "HTML, CSS, JavaScript",
//     number: 7
//   },
//   {
//     name: "Football Cards",
//     id: "football-cards",
//     type: "front-end",
//     description: "FreeCodeCamp JavaScript Course",
//     languages: "HTML, CSS, JavaScript",
//     number: 10
//   },
//   {
//     name: "Statistics Calculator",
//     id: "statistics-calculator",
//     type: "front-end",
//     description: "FreeCodeCamp JavaScript Course",
//     languages: "HTML, CSS, JavaScript",
//     number: 16
//   },
//   {
//     name: "Bookstore",
//     id: "bookstore",
//     type: "back-end",
//     description: "Django for Professionals Course",
//     languages: "Python, HTML",
//     frameworks: ["django", "tailwind"]
//   }
// ]
// renderProjectCards(myPortfolio);
