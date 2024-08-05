//
window.addEventListener('scroll', function() {
    let text = document.querySelectorAll('.text');
    text.forEach(element => {
        let textPos = element.getBoundingClientRect().top;
        let screenPosition = window.innerHeight/1.3;
        if (textPos < screenPosition) {
            element.classList.add("visible");
        }
    });
});


// makes images appear on scroll
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.reveal');
    
    elements.forEach(element => {
        let position = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        
        
        if (position < windowHeight && position > 0) { 
            element.classList.add('visible');
        } else {

            element.classList.remove('visible');
        }
    });
});


// makes about us section appear
document.addEventListener("scroll", function() {
    let descr = document.querySelector(".descr");
    let descrPosition = descr.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (descrPosition < screenPosition) {
        descr.classList.add("visible");
    }
});



// contacts appear on scroll
window.addEventListener('scroll', function() {
    let contactform = document.getElementById('contactform');
    let contactsPos = contactform.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.3;
    // Add the 'visible' class when scrolled 200px down (adjust as necessary)
    if (contactsPos < screenPosition) {
        contactform.classList.add('visible');
    }
});

//likes
let buttons = document.getElementsByClassName("like");
buttons = [...buttons]

buttons.forEach(element => {
    element.addEventListener("click", () => {
        if (element.firstChild.classList.contains("fa-regular")) {
            element.firstChild.classList.remove("fa-regular");
            element.firstChild.classList.add("fa-solid");
            element.firstChild.style.color = "red";
            element.nextElementSibling.innerHTML = 1;
        } else {
            element.firstChild.classList.remove("fa-solid");
            element.firstChild.classList.add("fa-regular");
            element.firstChild.style.color = "whitesmoke";
            element.nextElementSibling.innerHTML = "";
        }
    })
});



// shares
let modal = document.getElementById("myModal");
let shareButtons = document.querySelectorAll(".share");
let span = document.getElementsByClassName("close")[0];

// Loop through each share button to attach a click event
shareButtons.forEach((btn) => {
    btn.onclick = function() {
        modal.classList.add("show");
        setTimeout(() => {
            modal.querySelector(".modal-content").classList.add("show");
        }, 10); // Small delay to allow modal to appear first
    };
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    closeModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Function to close modal
function closeModal() {
    // Instantly move content out of view and remove transition
    let modalContent = modal.querySelector(".modal-content");
    modalContent.classList.remove("show");
    modalContent.classList.add("hide");
    
    // After hiding content, hide the modal background
    setTimeout(() => {
        modal.classList.remove("show");
        modalContent.classList.remove("hide");
    }, 0); // No delay for closing
}


// copy function
let copy = document.getElementsByClassName("copy")[0];
copy.addEventListener("click", ()=>{
    var inputText = document.getElementById("inputtext");

    inputText.select(); // Select the text field
    inputText.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(inputText.value).then(function() {
        alert("Text copied to clipboard!");
    }).catch(function(error) {
        console.error("Error copying text: ", error);
    });

} )



