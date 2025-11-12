document.addEventListener("DOMContentLoaded", () => {
  const cvForm = document.getElementById("cvForm");
  const cvPreview = document.getElementById("cvPreview");

  const experienceList = document.getElementById("experienceList");
  const educationList = document.getElementById("educationList");
  const skillsList = document.getElementById("skillsList");
  const languagesList = document.getElementById("languagesList");

  const addExperienceBtn = document.getElementById("addExperience");
  const addEducationBtn = document.getElementById("addEducation");
  const addSkillBtn = document.getElementById("addSkill");
  const addLanguageBtn = document.getElementById("addLanguage");

  const editBtn = document.getElementById("editCV");
  const resubmitBtn = document.getElementById("resubmitCV");
  const cvButtonsDiv = document.getElementById("cvButtons");

  // Helper function to create input fields
  function createInput(placeholder) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = placeholder;
    return input;
  }

  // Add dynamic fields
  addExperienceBtn.addEventListener("click", () => experienceList.appendChild(createInput("Enter experience")));
  addEducationBtn.addEventListener("click", () => educationList.appendChild(createInput("Enter education")));
  addSkillBtn.addEventListener("click", () => skillsList.appendChild(createInput("Enter skill")));
  addLanguageBtn.addEventListener("click", () => languagesList.appendChild(createInput("Enter language")));

  // Generate CV
  cvForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    const experiences = Array.from(experienceList.querySelectorAll("input")).map(input => input.value);
    const educations = Array.from(educationList.querySelectorAll("input")).map(input => input.value);
    const skills = Array.from(skillsList.querySelectorAll("input")).map(input => input.value);
    const languages = Array.from(languagesList.querySelectorAll("input")).map(input => input.value);

    cvPreview.innerHTML = `
      <h2>${fullName}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>

      <h3>Experience</h3>
      <ul>${experiences.map(exp => `<li>${exp}</li>`).join("")}</ul>

      <h3>Education</h3>
      <ul>${educations.map(edu => `<li>${edu}</li>`).join("")}</ul>

      <h3>Skills</h3>
      <ul>${skills.map(skill => `<li>${skill}</li>`).join("")}</ul>

      <h3>Languages</h3>
      <ul>${languages.map(lang => `<li>${lang}</li>`).join("")}</ul>
    `;

    // Hide form, show buttons
    cvForm.style.display = "none";
    cvButtonsDiv.style.display = "block";
    editBtn.style.display = "inline-block";
    resubmitBtn.style.display = "inline-block";
  });

  // Edit CV
  editBtn.addEventListener("click", () => {
    cvForm.style.display = "block";
    cvButtonsDiv.style.display = "none";
    cvPreview.scrollIntoView({ behavior: "smooth" });
  });

  // Resubmit CV
  resubmitBtn.addEventListener("click", () => {
    cvForm.dispatchEvent(new Event("submit"));
    cvPreview.scrollIntoView({ behavior: "smooth" });
  });
});
