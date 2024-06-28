const resume = {
    name: "Jane Doe",
    title: "Software Engineer",
    contact: {
      email: "jane.doe@example.com",
      phone: "123-456-7890"
    },
    summary: "Experienced Software Engineer with expertise in developing scalable web applications.",
    experience: [
      {
        company: "Tech Solutions Inc.",
        position: "Senior Software Engineer",
        dates: "2020 - Present"
      },
      {
        company: "Web Innovators LLC",
        position: "Software Engineer",
        dates: "2018 - 2020"
      }
    ],
    education: {
      degree: "B.S. in Computer Science",
      institution: "State University",
      year: "2018"
    }
  };
  
  console.log("Name: " + resume.name);
  console.log("Title: " + resume.title);
  console.log("Contact: " + resume.contact.email + ", " + resume.contact.phone);
  console.log("Summary: " + resume.summary);
  console.log("Experience:");
  resume.experience.forEach(job => {
    console.log("- " + job.position + " at " + job.company + " (" + job.dates + ")");
  });
  console.log("Education: " + resume.education.degree + " from " + resume.education.institution + " (" + resume.education.year + ")");
  