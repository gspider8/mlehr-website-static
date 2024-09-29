const timeline = document.getElementById('employmentHistory');
const skillSection = document.getElementById('skills');
let myData

// TODO make header sizes larger on global css
// TODO On push to main it updates the s3 bucket main website is located on

fetchJSON("data/resume.json")

const renderResume = () => {
  const {jobs, skills, education, certifications, tags} = myData;


  // display each job (with a condition to be displayed) on the page
  // TODO add this condition so that the older jobs can be added to a dropdown
  jobs.forEach(obj => {
    timeline.innerHTML += `
      <section class="timeline-entry">
        <h2 class="category-header dropdown" id="timeline-${obj.id}-dropdown">
          ${obj.title} at ${obj.company} <span id="timeline-${obj.id}-triangle-dropdown" class="triangle-dropdown"></span>
        </h2>
        
        <div class="card">
          <p>${obj.years} </p>
          <p>${obj.location}</p>
        </div>
        
      </section>`
  })

  // Turn timeline-entry into dropdown menu
  jobs.forEach(obj => {
    createTriangleDropdown(
      `timeline-${obj.id}-dropdown`,
      trianglePrefix = `timeline-${obj.id}`,
      hiddenElementDisplayStyle = "block")
  })

  // find all skill tags
  const skillCategories = {};
  for (const skill in skills) {
    skills[skill].tags.forEach(skillTag => {
      if (!skillCategories[skillTag]) {
        skillCategories[skillTag] = [skill];
      } else {
        skillCategories[skillTag].push(skill);
      }
    })
  }

  // Display skills by category
  for (const tagKey in skillCategories) {
    const skillKeys = skillCategories[tagKey];
    // console.log(tagKey, skillKeys);

    // Create Category Section
    const categorySection = document.createElement("section");
    categorySection.classList.add("category-section");
    categorySection.id = `${tagKey}-section`;
    categorySection.innerHTML = `<h2 class="category-header dropdown" id="${tagKey}-dropdown">
      ${tags[tagKey].name} <span id="${tagKey}-triangle-dropdown" class="triangle-dropdown"></span>
    </h2>`;

    // Create Skill Card Container
    const skillsContainer = document.createElement("div");
    skillsContainer.classList.add("cards", "skill-cards")

    // Create Skill Cards
    skillKeys.forEach(skillKey => {
      const skill = skills[skillKey]
      const certification = certifications[skill?.certification];

      // Create Skill Card
      const skillCard = document.createElement("div");
      skillCard.classList.add("card");
      skillCard.id = `${skillKey}-skill-card`;
      skillCard.innerHTML = `
        <h2 class="skill-entry-header">${skill.name}</h2>
        <p>Years Experience: ${skill.yearsExperience}</p>
        ${certification 
        ? certification?.image
        ? `<img src="images/${certification.image}" alt="${certification.name} badge" />` 
        : `<p>Certification: <a href="${certification.url}" target="_blank">${certification.name}</a></p>` 
        : ""}
        
      `

      skillsContainer.append(skillCard);
    })

    // Append Skill Containers to Category Container
    categorySection.append(skillsContainer)

    // Add Category Container to DOM
    skillSection.append(categorySection);

    // Turn Category Container into dropdown menu
    createTriangleDropdown(`${tagKey}-dropdown`, trianglePrefix = tagKey)

  }
  console.log("still working")
}
