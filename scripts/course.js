const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]


//Change the value of the key completed to true for indexes 0 to 4
const completedCourses = courses.slice(0, 5);
completedCourses.forEach(course => {
    course['completed'] = true;
})

// store index 5, that has the value false for key completed, in a separate array
const notCompletedCourses = courses.slice(5);

// concatenate the two new arrays
const updatedCourses = completedCourses.concat(notCompletedCourses);



// ---------- Function ---------

// call the function to create a section with all the courses, displayed by the title only
createCoursesSection(updatedCourses);

function createCoursesSection(coursesArray) {
    document.querySelector("#certif-courses").innerHTML = "";

    let options = document.createElement("division")
    let allButton = document.createElement("button");
    let wddButton = document.createElement("button");
    let cseButton = document.createElement("button");

    options.setAttribute("id", "course-options");
    allButton.textContent = "All"; 
    allButton.setAttribute("type", "button");
    allButton.setAttribute("id", "all");
    wddButton.textContent = "WDD"; 
    wddButton.setAttribute("type", "button");
    wddButton.setAttribute("id", "wdd");
    cseButton.textContent = "CSE"; 
    cseButton.setAttribute("type", "button");
    cseButton.setAttribute("id", "cse");

    options.appendChild(allButton);
    options.appendChild(wddButton);
    options.appendChild(cseButton);

    document.querySelector("#certif-courses").appendChild(options);


 
    let cards = document.createElement("division")
    cards.setAttribute("id", "all-cards");

    coursesArray.forEach(course => {
        let courseBox = document.createElement("section");
    
        courseBox.innerHTML = `${course['subject']} ${course['number']}`;

        cards.appendChild(courseBox);

    });

    document.querySelector("#certif-courses").appendChild(cards);

}
// ----------- END of Function -----------

