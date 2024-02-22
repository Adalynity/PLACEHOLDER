$('textarea').keyup(function(){

    if(this.value.length > 500){
        return false;
    }

    $(".charRemaining").html("Remaining characters : " + (500 - this.value.length));
});​