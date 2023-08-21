let enrolledName = document.getElementById('enrollName');
let email = document.querySelector('#inputEmail');
let website = document.querySelector('#inputWebsite');
let image = document.querySelector('#inputImg');
let gender = document.getElementsByName('gender');
let skills = document.getElementsByName('skills');

var form = document.getElementById('form');
var enrolledNone = document.getElementById('enrolledNone');
var table = document.querySelector('#students-table');
var genderValue = undefined;
var skillsValue = '';
var submitButton = document.querySelector('#enrollBtn');
var tableRowCountervalue = 1;


// function to check whether a gender is selected or not.
function isValidGender(gender) {
    if (gender == "") {
        alert("Gender must be filled out");
        return false;
    }
    return true;
}

// fiunction to check at least one skill is selected.
function isValidSkills() {
    var java = document.getElementById("java");
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    if (java.checked == false && html.checked == false && css.checked == false) {
        alert("Mention at least 1 skill");
        return false;
    }
    return true;
}

// function to validate email.
function isValidEmail() {
    var email = document.getElementById("inputEmail").value;
    var dotposition = email.indexOf('.');
    var atposition = email.indexOf('@');
    if (atposition < 1 || dotposition < atposition + 6 || dotposition + 2 >= email.length) {
        alert("Please enter a valid e-mail address");
        return false;
    }
    else {
        return true;
    }
}


// function for adding enrolled student in the table
function addStudent() {

    if (submitButton.classList.contains('disabled')) {
        return;
    }
    enrolledNone.style = 'display: none;';
    gender.forEach(gen => {
        if (gen.checked) {
            genderValue = gen.value;
        }
    });
    skills.forEach(skill => {
        if (skill.checked) {
            skillsValue += skill.value + ', ';
        }
    });
    skillsValue = skillsValue.substring(0, skillsValue.length - 2);
    var tr = document.createElement('tr');
    var student =
        `<td class='student-info'>
                <div class="name"><strong>${enrolledName.value}</strong></div>
                <div class="gender">${genderValue}</div>
                <div class="email"><a href="mailto:${email.value}">${email.value}</a></div>
                <div class="website"><a href="${website.value}" target="_blank">${website.value}</a></div>
                <div class="skills">${skillsValue}</div>
            </td>
            <td class='student-info'>
                <div><img src="${image.value}" alt="student_image" height="100" width="120" /></div>
            </td>`;
    tr.innerHTML = student;
    tr.style = `background: ${tableRowCountervalue % 2 === 0 ? '#ffffcc' : '#fafafa'}`;
    tr.classList.add('tr-animation');
    skillsValue = '';
    if(isValidGender(genderValue) && isValidSkills() && isValidEmail()){
        if(confirm("Do You want to submit this form")){
            table.append(tr);
        }
        tableRowCountervalue += 1;
    }
    
}

//function to clear input fields
function clearFields() {
    form.reset();
    submitButton.classList.add('disabled');
}