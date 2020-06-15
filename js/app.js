// global constants

// projects btn
const newestBtn = document.querySelector("#newest");
const majorBtn = document.querySelector("#major");
const allBtn = document.querySelector("#all");

// projects div
const newestProjects = document.querySelector("#newest-projects");
const majorProjects = document.querySelector("#major-projects");
const allProjects = document.querySelector("#all-projects");

// eventListeners
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", documentReady);
  newestBtn.addEventListener("click", showNewestProjects);
  majorBtn.addEventListener("click", showMajorProjects);
  allBtn.addEventListener("click", showAllProjects);
}

// my-profile
async function loadPersonalInfo() {
  const personalInfoResponse = await fetch("my-profile/my-profile.json");
  const personalInfo = await personalInfoResponse.json();

  return {
    personalInfo,
  };
}

// my-expertise
async function loadMyExpertise() {
  const myExpertiseResponse = await fetch(
    "my-profile/Expertise/my-expertise.json"
  );
  const myExpertise = await myExpertiseResponse.json();

  return {
    myExpertise,
  };
}

// skill description
async function loadSkillDescription() {
  const skillDescriptionResponse = await fetch(
    "my-profile/skills/skill-description.json"
  );
  const skillDescription = await skillDescriptionResponse.json();

  return {
    skillDescription,
  };
}

// frontend skills
async function loadFrontEndSkills() {
  const frontEndSkillResponse = await fetch("my-profile/skills/front-end.json");
  const frontEndSkills = await frontEndSkillResponse.json();

  return {
    frontEndSkills,
  };
}

// backend skills
async function loadBackendSkills() {
  const backendSkillsResponse = await fetch("my-profile/skills/back-end.json");
  const backendSkill = await backendSkillsResponse.json();

  return {
    backendSkill,
  };
}

// database
async function loadDatabaseSkills() {
  const databaseSkillsResponse = await fetch("my-profile/skills/database.json");
  const databaseSkills = await databaseSkillsResponse.json();

  return {
    databaseSkills,
  };
}

// my-education(degree)
async function loadMyEducationDegree() {
  const MyEducationDegreeResponse = await fetch(
    "my-profile/education/degree.json"
  );
  const MyEducationDegree = await MyEducationDegreeResponse.json();

  return {
    MyEducationDegree,
  };
}

// my-education(Cert)
async function loadMyEducationCert() {
  const MyEducationCertResponse = await fetch("my-profile/education/Cert.json");
  const MyEducationCert = await MyEducationCertResponse.json();

  return {
    MyEducationCert,
  };
}

// my-education(Secondary)
async function loadMyEducationSecondary() {
  const MyEducationSecondaryResponse = await fetch(
    "my-profile/education/Secondary.json"
  );
  const MyEducationSecondary = await MyEducationSecondaryResponse.json();

  return {
    MyEducationSecondary,
  };
}

// my-experience
async function loadMyExperience() {
  const MyExperienceResponse = await fetch(
    "my-profile/experience/my-experience.json"
  );
  const MyExperience = await MyExperienceResponse.json();

  return {
    MyExperience,
  };
}

// new-projects
async function loadMyNewProjects() {
  const myNewProjectsResponse = await fetch(
    "my-profile/projects/new-projects.json"
  );
  const myNewProjects = await myNewProjectsResponse.json();

  return {
    myNewProjects,
  };
}

// major-projects
async function loadMyMajorProjects() {
  const myMajorProjectsResponse = await fetch(
    "my-profile/projects/major-projects.json"
  );
  const myMajorProjects = await myMajorProjectsResponse.json();

  return {
    myMajorProjects,
  };
}

// all-projects
async function loadMyAllProjects() {
  const myAllProjectsResponse = await fetch(
    "my-profile/projects/all-projects.json"
  );
  const myAllProjects = await myAllProjectsResponse.json();

  return {
    myAllProjects,
  };
}

// functions
function documentReady() {
  // personal info
  loadPersonalInfo()
    .then((personalInfo) => {
      const personalInfoJSON = personalInfo.personalInfo;

      const myName = personalInfoJSON.first_name,
        lastName = personalInfoJSON.last_name,
        website = personalInfoJSON.website,
        domainUrl = personalInfoJSON.website_url,
        specialization = personalInfoJSON.specialization,
        devSide = personalInfoJSON.dev_side,
        country = personalInfoJSON.country;

      document.querySelector("#navHead").innerHTML = `
        <div class="author-img" style="background-image: url(images/about.jpg);"></div>
        <h1 id="colorlib-logo"><a href="index.html">${myName} ${lastName}</a></h1>
        <span class="position"><a href="#">${devSide} ${specialization}</a> in ${country}</span>
      `;

      document.querySelector("#listOne").innerHTML = `
        <div class="row">
          <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
            <div class="slider-text-inner js-fullheight">
                <div class="desc">
                  <h1>Hi! <br>I'm <span>${myName}</span></h1>
                  <h2>Welcome to my portfolio : <a href="${domainUrl}" target="_blank">${website}</a></h2>
                  <p><a class="btn btn-primary btn-learn">Download CV <i class="icon-download4"></i></a></p>
              </div>
            </div>
          </div>
        </div>
      `;
      document.querySelector("#listTwo").innerHTML = `
        <div class="row">
          <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
            <div class="slider-text-inner">
              <div class="desc">
                <h1>I am <br>a <span class="text-capitalize">${specialization}</span></h1>
                <h2>full-stack web applications and softwares <a href="${domainUrl}" target="_blank">${website}</a></h2>
                <p><a class="btn btn-primary btn-learn">View Portfolio <i class="icon-briefcase3"></i></a></p>
              </div>
            </div>
          </div>
        </div>
      `;
      document.querySelector("#aboutMe").innerHTML = `
      <span class="heading-meta">About </span>
        <h2 class="colorlib-heading">Who Am I?</h2>
        <p>Hi I'm<strong> ${myName} ${lastName}</strong> ${personalInfoJSON.summary.personal_info}</p>
        <p>${personalInfoJSON.summary.detailed_info}.</p>
      `;

      const myWorks = personalInfoJSON.summary.work;
      const aboutShow = document.querySelector("#aboutShow");
      myWorks.forEach((work) => {
        const show = `
          <div class="col-md-3 animate -box" data-animate-effect="fadeInRight">
            <div class="services ${work.color}">
              <span class="icon2"><i class="${work.icon}"></i></span>
              <h3>${work.name}</h3>
            </div>
          </div>
        `;
        aboutShow.insertAdjacentHTML("beforeend", show);
      });
    })
    .catch((error) => console.log(error));

  // MY EXPERTISE
  loadMyExpertise()
    .then((myExpertise) => {
      myExpertise.myExpertise.forEach((expertise) => {
        const expertiseDiv = `
        <div class="col-md-4 text-center animate- box">
          <div class="services ${expertise.color}">
            <span class="icon">
              <i><img src="${expertise.logo}" style="height: 50px; width: 53px; border-radius: 5px;"></i>
            </span>
            <div class="desc">
              <h3>${expertise.name}</h3>
              <p>${expertise.description}</p>
            </div>
          </div>
        </div>
      `;
        document
          .querySelector("#expertise")
          .insertAdjacentHTML("beforeend", expertiseDiv);
      });
    })
    .catch((error) => console.log(error));

  // SKILL DESCRIPTION
  loadSkillDescription()
    .then((skillDescription) => {
      console.log();
      document.querySelector("#skillDesc").innerText =
        skillDescription.skillDescription.skill_description;
    })
    .catch((error) => console.log(error));

  // FRONTEND SKILLS
  loadFrontEndSkills()
    .then((skill) => {
      const results = skill.frontEndSkills;
      results.map((result) => {
        const resultsDiv = `
        <div class="col-md-4 text-center">
          <div class="services ${result.color}">
            <span class="icon">
              <i><img src="${result.logo}" style="height: 50px; width: 53px; border-radius: 5px;"></i>
          
            </span>
            <div class="desc">
              <h3>${result.language}</h3>
              <p>I'm happy for my skills in ${result.language}. Already ${result.projects} projects done.</p>
              <br>
              <div class="progress-wrap">
								<div class="progress">
								 	<div class="progress-bar ${result.color}" role="progressbar" aria-valuenow="${result.level}"
								  	aria-valuemin="0" aria-valuemax="100" style="width: ${result.level}%">
								    <span>${result.level}%</span>
								  	</div>
								</div>
							</div>
            </div>
          </div>
        </div>
      `;
        document
          .querySelector("#front-end")
          .insertAdjacentHTML("beforeend", resultsDiv);
      });
    })
    .catch((error) => console.log(error));

  // BACKEND SKILLS
  loadBackendSkills()
    .then((skill) => {
      skill.backendSkill.map((result) => {
        const resultsDiv = `
        <div class="col-md-4 text-center animate -box">
          <div class="services ${result.color}">
            <span class="icon">
              <i><img src="${result.logo}" style="height: 50px; width: 53px; border-radius: 5px;"></i>
            </span>
            <div class="desc">
              <h3>${result.language}</h3>
              <p>I'm happy for my skills in ${result.language}. Already ${result.projects} projects done.</p>
              <br>
              <div class="progress-wrap">
								<div class="progress">
								 	<div class="progress-bar ${result.color}" role="progressbar" aria-valuenow="${result.level}"
								  	aria-valuemin="0" aria-valuemax="100" style="width: ${result.level}%">
								    <span>${result.level}%</span>
								  	</div>
								</div>
							</div>
            </div>
          </div>
        </div>
      `;
        document
          .querySelector("#back-end")
          .insertAdjacentHTML("beforeend", resultsDiv);
      });
    })
    .catch((error) => console.log(error));

  // DATABASE SKILLS
  loadDatabaseSkills()
    .then((skill) => {
      skill.databaseSkills.map((result) => {
        const resultsDiv = `
        <div class="col-md-4 text-center">
          <div class="services ${result.color}">
            <span class="icon">
              <i><img src="${result.logo}" style="height: 50px; width: 53px; border-radius: 5px;"></i>
            </span>
            <div class="desc">
              <h3>${result.language}</h3>              
              <p>I'm happy for my skills in ${result.language}. Already ${result.projects} projects done.</p>
              <br>
              <div class="progress-wrap">
								<div class="progress">
								 	<div class="progress-bar ${result.color}" role="progressbar" aria-valuenow="${result.level}"
								  	aria-valuemin="0" aria-valuemax="100" style="width: ${result.level}%">
								    <span>${result.level}%</span>
								  	</div>
								</div>
							</div>
            </div>
          </div>
        </div>
      `;
        document
          .querySelector("#database")
          .insertAdjacentHTML("beforeend", resultsDiv);
      });
    })
    .catch((error) => console.log(error));

  // MY EDUCATION (DEGREE)
  loadMyEducationDegree()
    .then((degree) => {
      document.querySelector(
        "#headingOne a"
      ).innerText = `${degree.MyEducationDegree.level} in ${degree.MyEducationDegree.course}`;

      document.querySelector("#degree-content").innerHTML = `
        <div class="col-md-6">
          <p>
            I'm a student at Rongo University, currently in my fourth year second semester. 
            Hopefully will graduate in december 2020.
          </p>
        </div>
        <div class="col-md-6">
          <p>
            I take ${degree.MyEducationDegree.course} as the main course. ${degree.MyEducationDegree.specialization} major.
          </p>
        </div>
      `;
    })
    .catch((error) => console.log(error));

  // MY EDUCATION (CERT)
  loadMyEducationCert()
    .then((cert) => {
      document.querySelector(
        "#headingTwo a"
      ).innerText = `${cert.MyEducationCert.level}`;

      document.querySelector("#collapseTwo .panel-body").innerHTML = `
        <p>
          In the year ${cert.MyEducationCert.year_completion}, I did a certificate in ${cert.MyEducationCert.level} at ${cert.MyEducationCert.school}. The course was based on:
        </p>
        <ul>
          <li>Computer basics</li>
          <li>${cert.MyEducationCert.course}</li>
        </ul>
      `;
    })
    .catch((error) => console.log(error));

  // MY EDUCATION (SECONDARY)
  loadMyEducationSecondary()
    .then((Secondary) => {
      document.querySelector(
        "#headingFive a"
      ).innerText = `${Secondary.MyEducationSecondary.level}`;

      document.querySelector("#collapseFive .panel-body").innerHTML = `        
        <p>
          I did my ${Secondary.MyEducationSecondary.level} at ${Secondary.MyEducationSecondary.school}. I completed my ${Secondary.MyEducationSecondary.course} in the year ${Secondary.MyEducationSecondary.year_completion}.
        </p>        
      `;
    })
    .catch((error) => console.log(error));

  loadMyExperience()
    .then((allExperience) => {
      allExperience.MyExperience.forEach((experience) => {
        const experienceDiv = `
          <article class="timeline-entry">
            <div class="timeline-entry-inner">
                <div class="timeline-icon ${experience.color}">
                  <i class="icon-pen2"></i>
                </div>
                <div class="timeline-label">
                  <h2><a href="#">${experience.name}</a> <span>${experience.timeFrame}</span></h2>
                  <p>${experience.description}</p>
                </div>
            </div>
          </article>
        `;
        document
          .querySelector("#article")
          .insertAdjacentHTML("beforeend", experienceDiv);
      });
    })
    .catch((error) => console.log(error));
}

// MY-PROJECTS
loadMyNewProjects()
  .then((Projects) => {
    Projects.myNewProjects.map((project) => {
      const projectDiv = `
        <div class="col-md-6">
          <div class="project" style="background-image: url(${project.image}); background-position: center;">
            <div class="desc">
              <div class="con">
                <h3><a href="work.html">${project.name}</a></h3>
                <span>${project.description}</span>  
                <span><strong>Frontend:</strong> ${project.skill_info.frontend}</span>           
                <span><strong>Backend:</strong> ${project.skill_info.backend}</span>
                <span><strong>Database:</strong> ${project.skill_info.database}</span>           
                <p class="icon">
                  <span><a target="_blank" href="${project.urls.sourceCode}"><i class="fa fa-github"></i> code</a></span>
                  <span><a target="_blank" href="${project.urls.accessSite}"><i class="fa fa-eye"></i> launch</a></span>
                </p>
              </div>
            </div>
          </div>
        </div>        
      `;
      document
        .querySelector("#projects-new")
        .insertAdjacentHTML("beforeend", projectDiv);
    });
  })
  .catch((error) => console.log(error));

function showNewestProjects(e) {
  e.preventDefault();
  document.querySelector("#major a").classList.remove("active");
  document.querySelector("#all a").classList.remove("active");
  document.querySelector("#newest a").classList.add("active");

  newestProjects.style.display = "block";
  majorProjects.style.display = "none";
  allProjects.style.display = "none";

  loadMyNewProjects()
    .then((Projects) => {
      console.log(Projects);
    })
    .catch((error) => console.log(error));
}

function showMajorProjects(e) {
  e.preventDefault();
  newestProjects.style.display = "none";
  majorProjects.style.display = "block";
  allProjects.style.display = "none";

  document.querySelector("#newest a").classList.remove("active");
  document.querySelector("#all a").classList.remove("active");
  document.querySelector("#major a").classList.add("active");

  loadMyMajorProjects()
    .then((Projects) => {
      Projects.myMajorProjects.forEach((project) => {
        const projectDiv = `
        <div class="col-md-6">
          <div class="project" style="background-image: url(${project.image}); background-position: center;">
            <div class="desc">
              <div class="con">
                <h3><a href="work.html">${project.name}</a></h3>
                <span>${project.description}</span>
                <span><strong>Frontend:</strong> ${project.skill_info.frontend}</span>           
                <span><strong>Backend:</strong> ${project.skill_info.backend}</span>
                <span><strong>Database:</strong> ${project.skill_info.database}</span> 
                <p class="icon">
                  <span><a target="_blank" href="${project.urls.sourceCode}"><i class="fa fa-github"></i> code</a></span>
                  <span><a target="_blank" href="${project.urls.accessSite}"><i class="fa fa-eye"></i> launch</a></span>
                </p>
              </div>
            </div>
          </div>
        </div>        
      `;
        document
          .querySelector("#projects-major")
          .insertAdjacentHTML("beforeend", projectDiv);
      });
    })
    .catch((error) => console.log(error));
}

function showAllProjects(e) {
  e.preventDefault();
  document.querySelector("#newest a").classList.remove("active");
  document.querySelector("#major a").classList.remove("active");
  document.querySelector("#all a").classList.add("active");

  newestProjects.style.display = "none";
  majorProjects.style.display = "none";
  allProjects.style.display = "block";

  loadMyAllProjects()
    .then((Projects) => {
      Projects.myAllProjects.map((project) => {
        const projectDiv = `
        <div class="col-md-6">
          <div class="project" style="background-image: url(${project.image}); background-position: center;">
            <div class="desc">
              <div class="con">
                <h3><a href="work.html">${project.name}</a></h3>
                <span>${project.description}</span>
                <span><strong>Frontend:</strong> ${project.skill_info.frontend}</span>           
                <span><strong>Backend:</strong> ${project.skill_info.backend}</span>
                <span><strong>Database:</strong> ${project.skill_info.database}</span> 
                <p class="icon">
                  <span><a target="_blank" href="${project.urls.sourceCode}"><i class="fa fa-github"></i> code</a></span>
                  <span><a target="_blank" href="${project.urls.accessSite}"><i class="fa fa-eye"></i> launch</a></span>
                </p>
              </div>
            </div>
          </div>
        </div>        
      `;
        document
          .querySelector("#projects-all")
          .insertAdjacentHTML("beforeend", projectDiv);
      });
    })
    .catch((error) => console.log(error));
}
