// Variables
const mathGradeInput = document.querySelector(".math-grade-input");
const scienceGradeInput = document.querySelector(".science-grade-input");
const englishGradeInput = document.querySelector(".english-grade-input");
const computerGradeInput = document.querySelector(".computer-grade-input");
const showPercentageBtn = document.querySelector(".show-percentage");
const resultText = document.querySelector(".result-p");

// Functions
const showPercentage = () => {
  if (
    mathGradeInput.value === "" &&
    scienceGradeInput.value === "" &&
    englishGradeInput.value === "" &&
    computerGradeInput.value === ""
  ) {
    alert("Please enter your grades!");
  } else {
    let totalGrade =
      parseFloat(mathGradeInput.value) +
      parseFloat(scienceGradeInput.value) +
      parseFloat(englishGradeInput.value) +
      parseFloat(computerGradeInput.value);

    let gradePercentage = (totalGrade / 400) * 100;

    if (gradePercentage <= 100 && gradePercentage >= 80) {
      resultText.innerText = `Out of 400 your total is ${totalGrade} and percentage is ${gradePercentage}. Your grade is A. You are Pass.`;
    } else if (gradePercentage <= 79 && gradePercentage >= 60) {
      resultText.innerText = `Out of 400 your total is ${totalGrade} and percentage is ${gradePercentage}. Your grade is B. You are Pass.`;
    } else if (percentage <= 59 && percentage >= 40) {
      resultText.innerText = `Out of 400 your total is ${totalGrade} and percentage is ${gradePercentage}. Your grade is C. You are Pass.`;
    } else {
      resultText.innerText = `Out of 400 your total is ${totalGrade} and percentage is ${gradePercentage}. Your grade is F. You are Fail.`;
    }

    mathGradeInput.value = "";
    scienceGradeInput.value = "";
    englishGradeInput.value = "";
    computerGradeInput.value = "";
  }
};

// Event listeners
showPercentageBtn.addEventListener("click", showPercentage);
