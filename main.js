function change_location(loction) {
    window.location.href = loction;
}

function find_location() {
    console.log("sd");
}

function register_existUser() {
console.log("some")
  document.getElementById("existUser").style.display = "block";
  }

function register_newUser() {
    document.getElementById("newUser").style.display = "block" ;
}


function listen_to_questions(){

    var faq = document.getElementsByClassName("faq-question");
    var i;
    for (i = 0; i < faq.length; i++) {
        faq[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            var body = this.nextElementSibling;
            if (body.style.display === "block") {
                body.style.display = "none";
            } else {
                body.style.display = "block";
            }
        });
    }
}