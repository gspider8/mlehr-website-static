const timeline = document.getElementById('timeline');
const skillsBlock = document.getElementById('skillsBlock');
let myData
const tags = new Set();

fetchJSON("data/resume.json")

const renderResume = () => {
  // find all tags
  myData.skills.forEach(obj => {
    obj.tags.forEach(tag => {
      tags.add(tag)
    })
  })

  myData.jobs.forEach(obj => {
    timeline.innerHTML += `
      <div class="project-card entry">
        <h2>${obj.title} at ${obj.company}</h2>
        <p>${obj.location} | ${obj.years}</p>
        <p>${obj.description}</p>
      </div>`
  })
  myData.skills.forEach(obj => {
    skillsBlock.innerHTML += `
      <div class="project-card entry">
        <h2>${obj.name}</h2>
      </div>
    `
  })
  console.log("test")
  console.log("list",categoryList)
}




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
