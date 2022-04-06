//Grade Problem
var marks = parseInt(prompt("Enter Marks : "))

// checking the conditions
if (marks >= 90)
    document.write("A")
else if (marks >= 80)
    document.write("A-")
else if (marks >= 70)
    document.write("C")
else if (marks >= 60)
    document.write("D+")
else if (marks >= 50)
    document.write("D")
else
    document.write("Sorry. You are Failed")