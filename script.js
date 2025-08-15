// Form Elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const summaryInput = document.getElementById("summary");
const skillsInput = document.getElementById("skills");

const addEducationBtn = document.getElementById("add-education");
const educationSection = document.getElementById("education-section");

const addExperienceBtn = document.getElementById("add-experience");
const experienceSection = document.getElementById("experience-section");

const clearFormBtn = document.getElementById("clear-form");

// Preview Elements
const previewName = document.getElementById("preview-name");
const previewEmail = document.getElementById("preview-email");
const previewPhone = document.getElementById("preview-phone");
const previewSummary = document.getElementById("preview-summary");
const previewEducation = document.getElementById("preview-education");
const previewSkills = document.getElementById("preview-skills");
const previewExperience = document.getElementById("preview-experience");

// Live Update Function
function updatePreview() {
  previewName.textContent = nameInput.value || "Your Name";
  previewEmail.textContent = emailInput.value;
  previewPhone.textContent = phoneInput.value;
  previewSummary.textContent = summaryInput.value;

  // Education List
  previewEducation.innerHTML = "";
  document.querySelectorAll(".edu-input").forEach(input => {
    if (input.value) {
      let li = document.createElement("li");
      li.textContent = input.value;
      previewEducation.appendChild(li);
    }
  });

  // Skills List
  previewSkills.innerHTML = "";
  skillsInput.value.split(",").forEach(skill => {
    if (skill.trim()) {
      let li = document.createElement("li");
      li.textContent = skill.trim();
      previewSkills.appendChild(li);
    }
  });

  // Experience List
  previewExperience.innerHTML = "";
  document.querySelectorAll(".exp-input").forEach(input => {
    if (input.value) {
      let li = document.createElement("li");
      li.textContent = input.value;
      previewExperience.appendChild(li);
    }
  });
}

// Event Listeners for Live Update
document.querySelectorAll("input, textarea").forEach(el => {
  el.addEventListener("input", updatePreview);
});

// Add Education Row
addEducationBtn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("edu-item");
  div.innerHTML = '<input type="text" placeholder="Degree, School, Year" class="edu-input">';
  educationSection.appendChild(div);
  div.querySelector("input").addEventListener("input", updatePreview);
});

// Add Experience Row
addExperienceBtn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("exp-item");
  div.innerHTML = '<input type="text" placeholder="Job, Company, Year" class="exp-input">';
  experienceSection.appendChild(div);
  div.querySelector("input").addEventListener("input", updatePreview);
});

// Clear Form
clearFormBtn.addEventListener("click", () => {
  setTimeout(updatePreview, 0); // Reset preview after form clears
});