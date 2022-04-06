// Vowel using switch case

var letter = prompt("Enter a letter : ")
letter = letter.toLowerCase()

// checking the conditions for vowel and consonant
switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        document.write("Vowel");
        break;
    default:
        document.write("Consonant");
}