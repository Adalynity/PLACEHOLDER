document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const area = document.getElementById('area').value;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value;

    if (validateForm(name, email, area, date, message)) {
        sendEmail(name, email, area, date, message);
    } else {
        alert('Please fill in all fields correctly.');
    }
});

function validateForm(name, email, area, date, message) {
    return name && email && area && date && message;
}

function sendEmail(name, email, area, date, message) {
    const mailtoLink = `mailto:joshua.taylor.developer@rackattack.win?subject=Contact%20Form%20Inquiry&body=Name: ${name}%0AEmail: ${email}%0AArea: ${area}%0ADate: ${date}%0AMessage: ${message}`;
    window.location.href = mailtoLink;
}
