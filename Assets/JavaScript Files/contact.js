// Some small animations
function onHoverImg()
{
    $("#logoImg").attr('src', 'Assets/Images/default_logo_white.png');
}

function offHoverImg()
{
    $("#logoImg").attr('src', 'Assets/Images/default_logo.png');
}

function onHoverBell()
{
    if(document.getElementById('bellConcierge').classList.contains('fa-shake')){

    }
    else{
        document.getElementById('bellConcierge').classList.add('fa-shake');
    }
    
}
function offHoverBell()
{
    if(document.getElementById('bellConcierge').classList.contains('fa-shake')){
        document.getElementById('bellConcierge').classList.remove('fa-shake');
    }
    else{

    }
    
}

function onHoverLocation(){
    if(document.getElementById('locationDot').classList.contains('fa-bounce')){

    }
    else{
        document.getElementById('locationDot').classList.add('fa-bounce');
    };
}

function offHoverLocation(){
    if(document.getElementById('locationDot').classList.contains('fa-bounce')){
        document.getElementById('locationDot').classList.remove('fa-bounce');
    }
    else{
        
    };
}

function onHoverShop(){
    if(document.getElementById('shoppingCart').classList.contains('fa-flip')){
        
    }
    else{
        document.getElementById('shoppingCart').classList.add('fa-flip');
    }
}

function offHoverShop(){
    if(document.getElementById('shoppingCart').classList.contains('fa-flip')){
        document.getElementById('shoppingCart').classList.remove('fa-flip');
    }
    else{
        
    }
}

function onHoverMail(){
    if(document.getElementById('mailIcon').classList.contains('fa-beat-fade')){
        
    }
    else{
        document.getElementById('mailIcon').classList.add('fa-beat-fade');
    }
}

function offHoverMail(){
    if(document.getElementById('mailIcon').classList.contains('fa-beat-fade')){
        document.getElementById('mailIcon').classList.remove('fa-beat-fade');
    }
    else{
        
    }
}

function onHoverHome(){
    if(document.getElementById('homeIcon').classList.contains('fa-beat')){
        
    }
    else{
        document.getElementById('homeIcon').classList.add('fa-beat');
    }
}

function offHoverHome(){
    if(document.getElementById('homeIcon').classList.contains('fa-beat')){
        document.getElementById('homeIcon').classList.remove('fa-beat');
    }
    else{
        
    }
}

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
