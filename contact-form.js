const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if(!name || !email || !subject || !message) {
        showMessage("All fiels are required", "error");
        return;
    };

    if(name.length===2){
        showMessage("Invalid name", "error");
        return;
    }

    const emailPattern = /^[a-zA-Z0-9.-_]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
    if(!email.match(emailPattern)) {
        showMessage("Enter a valid email address", "error");
        return;
    };

    showMessage("Message sent successfully", "success");
    e.target.reset(); 

    function showMessage (text, type) {
        messageBox.textContent = text;
        messageBox.className = type;
        messageBox.classList.toggle("show");

        setTimeout(()=>{
            messageBox.style.opacity=0;
        }, 4000)
    }
})