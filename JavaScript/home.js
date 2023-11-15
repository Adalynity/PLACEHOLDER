function inquiryEmail(){

    var yourMessage = document.getElementById("message").value
    var subject = document.getElementById("selectList").value
    var mail="mailto:adalynity@gmail.com?subject="+subject+"&body="+yourMessage;

    window = window.open(mail, 'emailWindow')
}

function navigatetoInquiry(){
    window.location.href = "../inquiry.html";
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function phoneButton(){
	window.location.href = 'tel:01475 686850'
}
function emailButton(){
	window.location.href = 'mailto:hello@redshairstudio.co.uk'
}