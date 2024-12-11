const courses = [
    {
        id: 1,
        title: "Web Dasturlash Asoslari",
        description: "HTML, CSS va JavaScript asoslari.",
        dur: "60 dars",
        lessons: [
            { id: 1, title: "HTML Asoslari" },
            { id: 2, title: "CSS Kirish" },
            { id: 3, title: "JavaScriptga Kirish" }
        ]
    },
    {
        id: 2,
        title: "Frontend Dasturlash",
        description: "React va Vue.js bilan ish boshlash.",
        dur: "48 dars",
        lessons: [
            { id: 1, title: "React Asoslari" },
            { id: 2, title: "Vue.js Asoslari" },
            { id: 3, title: "Angular asoslari" }
        ]
    },
    {
        id: 3,
        title: "Backend Dasturlash",
        description: "Node.js va Express bilan tanishuv.",
        dur: "40 dars",
        lessons: [
            { id: 1, title: "Node.js Kirish" },
            { id: 2, title: "Express bilan API yaratish" },
            { id: 3, title: "Ma'lumotlar bazasi integratsiyasi" }
        ]
    },
    {
        id: 4,
        title: "Android dasturlash",
        description: "Android Studio va Cotlin dasturlash tili",
        dur: "50 dars",
        lessons: [
            { id: 1, title: "Cotlin asoslari" },
            { id: 2, title: "Cotlin va Java" },
            { id: 3, title: "Java Spring" }
        ]
    },
    {
        id: 5,
        title: "Oliy Matematika",
        description: "Oliy darajadagi matematika ilmlari",
        dur: "70 dars",
        lessons: [
            { id: 1, title: "Limitlar" },
            { id: 2, title: "Hosilalar" },
            { id: 3, title: "Integrallar" }
        ]
    },
];


const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email && password) {
            alert("Kirish muvaffaqiyatli!");
            window.location.href = "courses.html"; 
        } else {
            alert("Email va parolni kiriting.");
        }
    });
}


const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (name && email && password) {
            alert("Ro'yxatdan o'tish muvaffaqiyatli!");
            window.location.href = "index.html"; 
        } else {
            alert("Barcha maydonlarni to'ldiring.");
        }
    });
}


const courseList = document.getElementById("courseList");
if (courseList) {
    courses.forEach((course) => {
        const li = document.createElement("li");
        let r = Math.floor(Math.random() * 250);
        li.innerHTML = `
            <h2>${course.title}</h2>
            <p>${course.description}</p>
            <p>${course.dur}</p>
            <div class="haqida">
            <button onclick="openCourse(${course.id})">Kursni Ko'rish</button>
            <span>Bitiruvchilar soni: ${r}</span>
            </div>
            
        `;
        courseList.appendChild(li);
    });
}


function openCourse(kursId) {
    localStorage.setItem("selectedCourseId", kursId); 
    window.location.href = "course-details.html"; 
}

// 5. Kurs tafsilotlarini yuklash (Course-details sahifasi)
const selectedCourseId = localStorage.getItem("selectedCourseId");
const courseTitle = document.getElementById("courseTitle");
const courseDescription = document.getElementById("courseDescription");
const courseDur = document.getElementById("courseDur");
const courseStudent = document.getElementById("courseStudent");
const lessonList = document.getElementById("lessonList");

if (selectedCourseId && courseTitle && courseDescription && lessonList) {
    const selectedCourse = courses.find(course => course.id == selectedCourseId);

    if (selectedCourse) {
        let r = Math.floor(Math.random() * 700)
        courseTitle.textContent = selectedCourse.title;
        courseDescription.textContent = selectedCourse.description;
        courseDur.textContent = selectedCourse.dur;
        courseStudent.textContent = `Talabalar soni: ${r}`;

        selectedCourse.lessons.forEach(lesson => {
            const li = document.createElement("li");
            li.textContent = lesson.title;
            lessonList.appendChild(li);
        });
    }
}


function goBack() {
    window.location.href = "courses.html";
}
