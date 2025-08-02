const actualPoints = 80;
const minGradPoints = 75;
const studentName = "Marie Nováková";

if (actualPoints >= minGradPoints) {
  console.log(
    `Student/ka ${studentName} prospěl/a s ${actualPoints} body, minimum bylo ${minGradPoints} bodů`
  );
} else {
  console.log(
    `Student/ka ${studentName} neprospěl/a s ${actualPoints} body, minimum bylo ${minGradPoints} bodů. Chybělo mu/jí ${
      minGradPoints - actualPoints
    } bodů`
  );
}



const pointsStudent = 60
const minPoints = 75
const nameStudent = "Alena Nováková"

if(pointsStudent >= minPoints) {
  console.log(`${nameStudent} ukončil/a studium úspěšně. Gratulujeme!`);
} else {
  console.log(`${nameStudent} neprospěl/a. Chybělo mu/jí ještě ${minPoints - pointsStudent} bodů.`);
}
