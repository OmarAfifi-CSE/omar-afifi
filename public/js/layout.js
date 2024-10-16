//Color Picker
document.getElementById('colorPicker').addEventListener('input', function () {
    const color = this.value;
    document.documentElement.style.setProperty('--my-color', color);
});

//Side Menu
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

//Google Sheet (Contact Me)
const scriptURL = 'https://script.google.com/macros/s/AKfycbx6Iy37SouYu_YjHu0gdn-CnQ7thOhj3rnX8KFspXF2e2PWXEY9rsINdN90A7fdoztDHA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Your massege has been sent successfuly"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 4000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})