// Add More Skills Logic
document.getElementById("add-skill")?.addEventListener("click", () => {
    const firstSkillInput = document.querySelector("#skills-container input") as HTMLInputElement;
  
    if (!firstSkillInput || !firstSkillInput.value.trim()) {
      alert("Please fill in the first skill before adding more.");
      return;
    }
  
    const skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.placeholder = "Skill";
    skillInput.required = true;
  
    document.getElementById("skills-container")?.appendChild(skillInput);
  });
  
  // Event Listener for "Generate Resume" button
  document.getElementById("resume-form")?.addEventListener("submit", (e: Event) => {
    e.preventDefault();
  
    if (!validateFormFields()) {
      return;
    }
  
    // Capture form data
    const userName = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const institution = (document.getElementById("institution") as HTMLInputElement).value;
    const graduationDate = (document.getElementById("graduation-date") as HTMLInputElement).value;
    const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
    const company = (document.getElementById("company") as HTMLInputElement).value;
    const startDate = (document.getElementById("start-date") as HTMLInputElement).value;
    const endDate = (document.getElementById("end-date") as HTMLInputElement).value;
  
    // Display other dynamic content
    (document.getElementById("display-name") as HTMLElement).textContent = userName;
    (document.getElementById("display-email") as HTMLElement).textContent = email;
    (document.getElementById("display-phone") as HTMLElement).textContent = phone;
    (document.getElementById("display-degree") as HTMLElement).textContent = degree;
    (document.getElementById("display-institution") as HTMLElement).textContent = institution;
    (document.getElementById("display-graduation-date") as HTMLElement).textContent = graduationDate;
    (document.getElementById("display-job-title") as HTMLElement).textContent = jobTitle;
    (document.getElementById("display-company") as HTMLElement).textContent = company;
    (document.getElementById("display-start-date") as HTMLElement).textContent = startDate;
    (document.getElementById("display-end-date") as HTMLElement).textContent = endDate;
  
    // Handle Profile Picture
    const profilePic = (document.getElementById("profile-pic") as HTMLInputElement).files?.[0];
    if (profilePic) {
      const reader = new FileReader();
      reader.onload = function (e) {
        (document.getElementById("display-profile-pic") as HTMLImageElement).src = e.target?.result as string;
      };
      reader.readAsDataURL(profilePic);
    }
  
    // Collect and display skills
    const skillInputs = document.querySelectorAll("#skills-container input") as NodeListOf<HTMLInputElement>;
    const skills: string[] = [];
    skillInputs.forEach(input => {
      if (input.value.trim()) {
        skills.push(input.value);
      }
    });
  
    const displaySkills = document.getElementById("display-skill-list");
    if (displaySkills) {
      displaySkills.innerHTML = "";
      skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        displaySkills.appendChild(skillItem);
      });
    }
  
  });
  // Form Validation
  function validateFormFields(): boolean {
    let isValid = true;
    let errorMessage = "";
  
  
    //capture Input Fields
    const userName = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const institution = (document.getElementById("institution") as HTMLInputElement).value;
    const graduationDate = (document.getElementById("graduation-date") as HTMLInputElement).value;
    const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
    const company = (document.getElementById("company") as HTMLInputElement).value;
    const startDate = (document.getElementById("start-date") as HTMLInputElement).value;
    const endDate = (document.getElementById("end-date") as HTMLInputElement).value;
  
    //validate user
    if (!userName) {
      isValid = false;
      errorMessage += "Name is required.\n";
    }
    //validate user email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      errorMessage += "Valid email is required.\n";
    }
    //validate user phone number
    const phonePattern = /^\d{10,15}$/;
    if (!phonePattern.test(phone)) {
      isValid = false;
      errorMessage += "Valid phone number is required.\n";
    }
    //validate user degree
    if (!degree) {
      isValid = false;
      errorMessage += "Degree is required.\n";
    }
    //validate institution
    if (!institution) {
      isValid = false;
      errorMessage += "Institution is required.\n";
    }
    //validate date
    if (!graduationDate) {
      isValid = false;
      errorMessage += "Graduation year is required.\n";
    }
    //validate job title
    if (!jobTitle) {
      isValid = false;
      errorMessage += "Job Title is required.\n";
    }
    //validate company
    if (!company) {
      isValid = false;
      errorMessage += "Company is required.\n";
    }
    //validate start date
    if (!startDate) {
      isValid = false;
      errorMessage += "Start date is required.\n";
    }
    //validate end date
    if (!endDate) {
      isValid = false;
      errorMessage += "End date is required.\n";
    }
  
    //validate skills 
    const skillInputs = document.querySelectorAll("#skills-container input") as NodeListOf<HTMLInputElement>;
    if (skillInputs.length === 0 || !skillInputs[0].value.trim()) {
      isValid = false;
      errorMessage += "At least one skill is required.\n";
    }
    
  
    //check if there is error show alert
    if (errorMessage) {
      alert(errorMessage);
    }
  
    //otherwise return ture and generate form
    return isValid;
  };