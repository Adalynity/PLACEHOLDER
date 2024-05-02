
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




