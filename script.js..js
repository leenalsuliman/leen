document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Form submitted successfully!');
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Announcement Form Submission
    const announcementForm = document.getElementById('announcementForm');
    const announcementsList = document.getElementById('announcementsList');

    if (announcementForm) {
        announcementForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;

            if (title && content) {
                const announcementItem = document.createElement('div');
                announcementItem.classList.add('announcement-item');
                announcementItem.innerHTML = `<h3>${title}</h3><p>${content}</p><button class="edit-announcement">Edit</button>`;

                announcementsList.appendChild(announcementItem);

                announcementForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });

        announcementsList.addEventListener('click', function(event) {
            if (event.target.classList.contains('edit-announcement')) {
                const announcementItem = event.target.parentElement;
                const title = announcementItem.querySelector('h3').innerText;
                const content = announcementItem.querySelector('p').innerText;

                document.getElementById('title').value = title;
                document.getElementById('content').value = content;

                announcementsList.removeChild(announcementItem);
            }
        });
    }

    // Grades Form Submission
    const gradesForm = document.getElementById('gradesForm');
    const gradesList = document.getElementById('gradesList');

    if (gradesForm) {
        gradesForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const studentName = document.getElementById('studentName').value;
            const course = document.getElementById('course').value;
            const grade = document.getElementById('grade').value;

            if (studentName && course && grade) {
                const gradeItem = document.createElement('div');
                gradeItem.classList.add('grade-item');
                gradeItem.innerHTML = `<h3>${studentName}</h3><p>Course: ${course}</p><p>Grade: ${grade}</p><button class="edit-grade">Edit</button>`;

                gradesList.appendChild(gradeItem);

                gradesForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });

        gradesList.addEventListener('click', function(event) {
            if (event.target.classList.contains('edit-grade')) {
                const gradeItem = event.target.parentElement;
                const studentName = gradeItem.querySelector('h3').innerText;
                const course = gradeItem.querySelector('p:nth-of-type(1)').innerText.replace('Course: ', '');
                const grade = gradeItem.querySelector('p:nth-of-type(2)').innerText.replace('Grade: ', '');

                document.getElementById('studentName').value = studentName;
                document.getElementById('course').value = course;
                document.getElementById('grade').value = grade;

                gradesList.removeChild(gradeItem);
            }
            document.getElementById('toggle-sidebar').addEventListener('click', function() {
                var sidebar = document.querySelector('.sidebar');
                sidebar.classList.toggle('active');
            });
        });
    }
});
document.getElementById('toggle-sidebar').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
});