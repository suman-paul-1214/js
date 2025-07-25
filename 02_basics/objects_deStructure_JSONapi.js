

const course = {
  title: "JavaScript Basics",
  description: "Learn the fundamentals of JavaScript.",
  duration: "3 hours",
  instructor: {
    title: "John Doe",
    experience: "5 years"
  }
};

const { title, description, duration, instructor: { title: instructorTitle, experience } } = course; // Object Destructuring

//console.log(title); // JavaScript Basics
//console.log(description); // Learn the fundamentals of JavaScript.
//console.log(duration); // 3 hours
//console.log(instructorTitle); // John Doe
//console.log(experience); // 5 years 

//basic structure of JSON API response
// {  
//   "login": "hiteshchoudhary",
//   "id": 123456,
//   "avatar_url": "https://avatars.githubusercontent.com/u/123456?v=4",
//   "html_url": "https://github.com/hiteshchoudhary"
// }

//not only in object format, but also in array format

// [
//   {},
//   {}
// ]


