function countCharacters(){
    var maxLength = 500;
    var characterCount = document.getElementById('userInput').nodeValue;

    var remainingChars = maxLength - characterCount;
    document.getElementById('charRemaining').textContent = "Remaining Characters: " + remainingChars;
}