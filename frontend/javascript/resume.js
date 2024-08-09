const timeline = document.getElementById('timeline');
const skillsBlock = document.getElementById('skillsBlock');
let myData

fetchJSON("data/resume.json")


// function so repeat isn't necessary for skills and timeline



const renderResume = () => {
  const employmentHistory = myData.jobs
  const categories = myData.skills
  console.log("Resume:", myData)
}


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




// categories.forEach(category => {
//   // Entry container for category
//   const entry = document.createElement('div');
//   entry.className = 'entry';
//   entry.id = 'entry-' + category.id;
//
//   // Title header for job
//   const header = document.createElement('div');
//   header.className = 'entry-header';
//   header.innerText = category.category;
//
//   // Content container for job, initially hidden
//   const content = document.createElement('div');
//   const skillList = document.createElement('ul');
//
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
