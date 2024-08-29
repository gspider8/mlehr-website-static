const timeline = document.getElementById('timeline');
const skillSection = document.getElementById('skills');
let myData

// TODO make header sizes larger on global css

fetchJSON("data/resume.json")

const renderResume = () => {
  const {jobs, skills, education, certifications, tags} = myData;


  // display each job (with a condition to be displayed) on the page
  // TODO add this condition so that the older jobs can be added to a dropdown
  jobs.forEach(obj => {
    timeline.innerHTML += `
      <div class="project-card entry">
          <h2>${obj.title} at ${obj.company}</h2>
        <p>${obj.location} | ${obj.years}</p>
        <p>${obj.description}</p>
      </div>`
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
    console.log(tagKey, skillKeys);

    // Create Category Section
    const categorySection = document.createElement("section");
    categorySection.classList.add("category-section");
    categorySection.id = `${tagKey}-section`;
    categorySection.innerHTML = `<h2 class="category-header">${tags[tagKey].name}</h2>`;

    // Create Skill Containers
    const skillsContainer = document.createElement("div");
    skillsContainer.classList.add("skills-container")
    skillKeys.forEach(skillKey => {
      const skill = skills[skillKey]
      const certification = certifications[skill?.certification];
      skillsContainer.innerHTML += `
        <div class="skill-entry">
          <h2 class="skill-entry-header">${skill.name}</h2>
          <p>Years Experience: ${skill.yearsExperience}</p>
          ${certification ? `
            <p>Certification: 
              <a href="${certification.url}" target="_blank">${certification.name}</a>
            </p>` : ""
          }
        </div>
      `
    })

    // Append Skill Containers to Category Container
    categorySection.append(skillsContainer)

    // Add Category Container to DOM
    skillSection.append(categorySection);
  }
  console.log("still working")
}


    // skillsBlock.innerHTML += `
    //   <div class="" id="skills-${tagKey}">
    //     <h2 class="entry-header">${tags[tagKey].displayName}</h2>
    //     <div class="entries-container">
    //     </div>
    //   </div>

          // ${skillKeys.reduce((acc, skillKey) => acc + `
          //   <div class="entry">
          //     <h3>${skills[skillKey].name}</h3>
          //     <p>Years Experience: ${skills[skillKey].yearsExperience}</p>
          //     ${skills[skillKey]?.certification ? `<p>Certification: ${skills[skillKey].certification}</p>` : ""}
          //     ${skills[skillKey]?.certification ? certifications[skills[skillKey].certification].embedCode : ""}
          //     <p></p>
          //   </div>`, ""
          // )}




//
// const skillEntry = document.createElement('div');
//     skillEntry.className = 'entry';
//     skillEntry.id = 'entry-' + skill.name;
//
//     const header = document.createElement('div');
//     header.className = 'entry-header';
//     header.innerText = skill.name;
//
//     const content = document.createElement('div');
//     ``
// //
//   // Skill list
//   category.skills.forEach((skill) => {
//     let skillElement = document.createElement("li");
//     skillElement.innerText = skill.name;
//     let sublist = document.createElement('ul')
//
//     // Additional Skill Attributes
//     Object.keys(skill).forEach((key) => {
//       if (key !== 'name') {
//         let newElement = document.createElement('li');
//         newElement.innerText = `${key}: ${skill[key]}`;
//         sublist.appendChild(newElement)
//       }
//     })
//
//     skillElement.appendChild(sublist);
//     skillList.appendChild(skillElement);
//   });
//   content.appendChild(skillList);
//
//   content.style.display = 'none';
//
//   // Append header and content to the entry
//   entry.appendChild(header);
//   entry.appendChild(content);
//

// --- TIMELINE ---



// employmentHistory.forEach(job => {
//   // Entry container for job
//   const entry = document.createElement('div');
//   entry.className = 'entry';
//   entry.id = 'entry-' + job.id;
//
//   // Title header for job
//   const header = document.createElement('div');
//   header.className = 'entry-header';
//   header.innerText = job.title;
//
//   // Content container for job, initially hidden
//   const content = document.createElement('div');
//   content.className = 'entry-content';
//   content.innerHTML = `<strong>  Company:</strong> ${job.company}<br>
//                            <strong>  Years:</strong> ${job.years}<br>
//                            <strong>  Location:</strong> ${job.location}<br>
//                            <p>${job.description}</p>`;
//   content.style.display = 'none';
//
// // Append header and content to the entry
// entry.appendChild(header);
// entry.appendChild(content);
//
// // Event listener to toggle content visibility
// header.addEventListener('click', function () {
//   // Check if the clicked header's content is currently shown
//   const isContentShown = content.style.display === 'block';
//   // Hide all open contents
//   document.querySelectorAll('.entry-content').forEach(el => {
//     el.style.display = 'none'; // Hide content
//   });
//   // Deactivate all headers
//   document.querySelectorAll('.entry').forEach(el => {
//     el.classList.remove('active'); // Remove active class
//   });
//
//   if (!isContentShown) {
//     // If it was not shown before, display it
//     content.style.display = 'block';
//     entry.classList.add('active');
//   } // If it was shown, it will be hidden as part of the above loop
// });
//
// timeline.appendChild(entry);




// --- SKILLS ---




//
//   // TODO Fix collapse/expand
//
// // Event listener to toggle content visibility
// header.addEventListener('click', function () {
//   // Check if the clicked header's content is currently shown
//   const isContentShown = content.style.display === 'block';
//   // Hide all open contents
//   document.querySelectorAll('.entry-content').forEach(el => {
//     el.style.display = 'none'; // Hide content
//   });
//   // Deactivate all headers
//   document.querySelectorAll('.entry').forEach(el => {
//     el.classList.remove('active'); // Remove active class
//   });
//
//   if (!isContentShown) {
//     // If it was not shown before, display it
//     content.style.display = 'block';
//     entry.classList.add('active');
//   } // If it was shown, it will be hidden as part of the above loop
// });
//
// skillsBlock.appendChild(entry);
