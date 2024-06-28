const resumeData = {
    "name": "XXX YYY",
    "contact_info": {
      "address": "789 ABC Street, City, State",
      "phone": "+91 98765 43210",
      "email": "xxx.yyy@example.com",
      "linkedin": "linkedin.com/in/xxxyyy",
      "website": "xxxyyy.com"
    },
    "summary": "Experienced professional in software development, specializing in backend systems and cloud-based applications. Proficient in Java, Python, and JavaScript, with a strong understanding of data structures and algorithms. Effective communicator and team player with a track record of delivering scalable solutions.",
    "education": [
      {
        "degree": "Bachelor of Engineering in Computer Science",
        "institution": "XYZ University",
        "location": "City, State, India",
        "graduation_date": "May 20XX"
      }
    ],
    "experience": [
      {
        "title": "Senior Software Engineer",
        "company": "Tech Solutions Pvt. Ltd.",
        "location": "City, State, India",
        "dates": "June 20XX - Present",
        "description": "Led the development of microservices architecture using Node.js and Docker. Designed and implemented scalable APIs for high-traffic applications. Collaborated closely with product managers to deliver features on time and within budget."
      },
      {
        "title": "Software Developer",
        "company": "Software Innovations Pvt. Ltd.",
        "location": "City, State, India",
        "dates": "August 20XX - May 20XX",
        "description": "Developed backend services and APIs using Python and Flask framework. Contributed to the optimization of database queries and performance tuning. Participated in code reviews and mentored junior developers."
      }
    ],
    "skills": [
      "Java",
      "Python",
      "JavaScript",
      "Node.js",
      "Docker",
      "Microservices Architecture",
      "Data Structures",
      "Algorithms",
      "SQL",
      "Agile Methodologies",
      "Team Leadership"
    ],
    "certifications": [
      {
        "title": "Certified Kubernetes Administrator (CKA)",
        "authority": "Cloud Native Computing Foundation",
        "date": "November 20XX"
      }
    ],
    "languages": [
      {
        "language": "English",
        "proficiency": "Fluent"
      },
      {
        "language": "Tamil",
        "proficiency": "Native"
      }
    ],
    "interests": [
      "Open-source projects",
      "Machine Learning",
      "Hiking"
    ]
  };
  
  // Using for...in loop
  console.log("--- Using for...in loop ---");
  for (let key in resumeData) {
    if (Array.isArray(resumeData[key])) {
      console.log(key + ":");
      resumeData[key].forEach(item => {
        console.log("  - " + JSON.stringify(item));
      });
    } else if (typeof resumeData[key] === 'object') {
      console.log(key + ":");
      for (let subKey in resumeData[key]) {
        console.log("  " + subKey + ": " + resumeData[key][subKey]);
      }
    } else {
      console.log(key + ": " + resumeData[key]);
    }
  }
  ////
  // Using forEach for Arrays
  console.log("--- Using forEach for Arrays ---");
  Object.keys(resumeData).forEach(key => {
    if (Array.isArray(resumeData[key])) {
      console.log(key + ":");
      resumeData[key].forEach(item => {
        console.log("  - " + JSON.stringify(item));
      });
    } else if (typeof resumeData[key] === 'object') {
      console.log(key + ":");
      Object.keys(resumeData[key]).forEach(subKey => {
        console.log("  " + subKey + ": " + resumeData[key][subKey]);
      });
    } else {
      console.log(key + ": " + resumeData[key]);
    }
  });
  
  ////
  // Using for...of loop for Arrays
  console.log("--- Using for...of loop for Arrays ---");
  for (let key of Object.keys(resumeData)) {
    if (Array.isArray(resumeData[key])) {
      console.log(key + ":");
      for (let item of resumeData[key]) {
        console.log("  - " + JSON.stringify(item));
      }
    } else if (typeof resumeData[key] === 'object') {
      console.log(key + ":");
      for (let subKey of Object.keys(resumeData[key])) {
        console.log("  " + subKey + ": " + resumeData[key][subKey]);
      }
    } else {
      console.log(key + ": " + resumeData[key]);
    }
  }
 ////
  // Using for loop alone
  console.log("--- Using for loop alone ---");
  
  // Get an array of keys from the resumeData object
  const keys = Object.keys(resumeData);
  
  // Iterate over each key
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = resumeData[key];
  
    // Check if the value is an array
    if (Array.isArray(value)) {
      console.log(key + ":");
      
      // Iterate over each item in the array
      for (let j = 0; j < value.length; j++) {
        console.log("  - " + JSON.stringify(value[j]));
      }
    } 
    // Check if the value is an object (excluding arrays, which are also objects in JavaScript)
    else if (typeof value === 'object' && !Array.isArray(value)) {
      console.log(key + ":");
      
      // Iterate over each property in the object
      const subKeys = Object.keys(value);
      for (let j = 0; j < subKeys.length; j++) {
        const subKey = subKeys[j];
        console.log("  " + subKey + ": " + value[subKey]);
      }
    } 
    // If the value is neither array nor object, assume it's a primitive (string, number, etc.)
    else {
      console.log(key + ": " + value);
    }
  }
  