//Get references to the foam and display area
var form = document.getElementById('resume-form');
var resumeDisplayElment = document.getElementById('resume-display');
//handel foam submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Genrate the resume content dynamically
    var resumeHTML = "\n     <h2><b>Resume</b></h2>\n     <h3>Personal Inoformation</h3>\n     <p><b>Name:</b>".concat(name, "</p>\n     <p><b>Email:</b>").concat(email, "</p>\n     <p><b>Phone:</b>").concat(phone, "</p>\n\n     <h3>Education</h3>\n     <p>").concat(education, "</p>\n\n     <h3>Expeience</h3>\n     <p>").concat(experience, "</p>\n\n     <h3>Skills</h3>\n     <p>").concat(skills, "</p>\n  ");
    //display the genrate resume
    if (resumeDisplayElment) {
        resumeDisplayElment.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display elemnet is missing.');
    }
});
