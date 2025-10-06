document.getElementById("contactForm").addEventListener('submit', (e) =>{
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if(!name || !email || !subject || !message) {
        alert("All fiels are required");
        return;
    };

    const emailPattern = /^[a-zA-Z0-9.-_]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
    if(!email.match(emailPattern)) {
        alert("Enter a valid email address");
        return;
    };

    alert("Message sent successfully");
    e.target.reset(); 
})