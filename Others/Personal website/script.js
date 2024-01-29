document.addEventListener("DOMContentLoaded", function () {
  skillQualification();

  document.getElementById("skills").addEventListener("click", function (event) {
    event.preventDefault(); //
    skillQualification();
  });

  document
    .getElementById("education")
    .addEventListener("click", function (event) {
      event.preventDefault(); //
      educationQualification();
    });

  document
    .getElementById("certifications")
    .addEventListener("click", function (event) {
      event.preventDefault(); //
      certificationsQualification();
    });
});

function skillQualification() {
  let displayQualification = document.getElementById("qualification-display");
  let skillsList = document.createElement("ul");

  let skillsArray = [
    "Bootstrap",
    "C",
    "C#",
    "HTML",
    "CSS",
    "JavaScript",
    "Figma",
    "Java",
    "Saas",
    "Tailwind Css",
    "MongoDB",
  ];

  skillsArray.forEach((skill) => {
    let listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
  });

  displayQualification.innerHTML = "";
  displayQualification.appendChild(skillsList);
}

function educationQualification() {
  let displayQualification = document.getElementById("qualification-display");
  let educationText = document.createElement("p");

  educationText.textContent =
    "Diploma in Software Engineering \n(Pending) \nNational Institute of Business Management \n2023";

  educationText.classList.add("certificateParagraph");

  displayQualification.innerHTML = "";
  displayQualification.appendChild(educationText);
}

function certificationsQualification() {
  let displayQualification = document.getElementById("qualification-display");
  let certificationText = document.createElement("p");

  certificationText.textContent = "Responsive Web Design by Free Code Camp";

  certificationText.classList.add("certificateParagraph");

  let certificationLink = document.createElement("a");
  certificationLink.href =
    "https://www.freecodecamp.org/certification/KaveeshYoshitha/responsive-web-design";
  certificationLink.target = "_blank"; //

  certificationLink.appendChild(certificationText);

  displayQualification.innerHTML = "";
  displayQualification.appendChild(certificationLink);
}
