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


// End of animations
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    if(document.getElementById('hamburger').classList.contains('fa-bars')){
        document.getElementById('hamburger').classList.add('fa-times');
        document.getElementById('hamburger').classList.remove('fa-bars');
    }
    else{
        document.getElementById('hamburger').classList.add('fa-bars');
        document.getElementById('hamburger').classList.remove('fa-times');
    }
});

$(document).ready(function() {
    var messageEle = document.querySelector('#messageArea');
    var counterEle = document.querySelector('#counter');

    messageEle.addEventListener('input', function (e) {
        const target = e.target;
    
        // Get the `maxlength` attribute
        const maxLength = target.getAttribute('maxlength');
    
        // Count the current number of characters
        const currentLength = target.value.length;
    
        counterEle.innerHTML = `${currentLength}/${maxLength}`;
    });
    
})




