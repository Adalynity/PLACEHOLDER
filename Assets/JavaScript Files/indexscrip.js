function onHover()
{
    $("#logoImg").attr('src', 'Assets/Images/default_logo_white.png');
}

function offHover()
{
    $("#logoImg").attr('src', 'Assets/Images/default_logo.png');
}


document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
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




