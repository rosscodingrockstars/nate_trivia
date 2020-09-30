const watermelon = [
  {
    question: "The first recorded watermelon harvest was in which place?",
    answerChoices: ["China", "Cuba", "Egypt", "Poland"],
    answer: "Egypt",
    gif: "images/gif1.gif"
  },
  {
    question:
      "According to the Guinness World records, how big was the biggest watermelon recorded?",
    answerChoices: [
      "26.50 pounds",
      "350.50 pounds",
      "30.00 pounds",
      "478.90 pounds"
    ],
    answer: "350.50 pounds",
    gif: "images/gif2.gif"
  },
  {
    question: "About what percentage of watermelon is water?",
    answerChoices: ["92%", "91%", "93%", "97%"],
    answer: "92%",
    gif: "images/gif3.gif"
  },
  {
    question: "Which vitamin type Isn't In watermelon?",
    answerChoices: ["A", "C", "B", "D"],
    answer: "D",
    gif: "images/gif4.gif"
  },
  {
    question: "About how many calories per 100 grams in watermelon is there?",
    answerChoices: ["60", "30", "20", "90"],
    answer: "30",
    gif: "images/gif5.gif"
  },
  {
    question: "Is watermelon a fruit?",
    answerChoices: ["Yes", "No"],
    answer: "Yes",
    gif: "images/gif6.gif"
  },
  {
    question: "Which temperature range should your watermelon be grown in?",
    answerChoices: [
      "70 to 90 degrees",
      "40 to 60 degrees",
      "100 to 120 degrees",
      "-70 to 5 degrees"
    ],
    answer: "70 to 90 degrees",
    gif: "images/gif7.gif"
  },
  {
    question: "Is watermelon healthy?",
    answerChoices: ["Yes", "No"],
    answer: "Yes",
    gif: "images/gif8.webp"
  },
  {
    question:
      "Per 100 grams of watermelon, about how many grams of sugar Is there?",
    answerChoices: ["0 grams", "2 grams", "6 grams", "10 grams"],
    answer: "6 grams",
    gif: "images/gif9.webp"
  },
  {
    question: "What percentage of watermelon is water?",
    answerChoices: ["90%", "93%", "60%", "92%"],
    answer: "92%",
    gif: "images/gif10.webp"
  }
];

console.log(watermelon[0].answerChoices[0]);

const Question = `
<h2>${watermelon[0].question}</h2>

<form>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="${
    watermelon[0].answerChoices[0]
  }" checked>
  <label class="form-check-label" for="exampleRadios1">
  ${watermelon[0].answerChoices[0]}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="${
    watermelon[0].answerChoices[1]
  }">
  <label class="form-check-label" for="exampleRadios2">
  ${watermelon[0].answerChoices[1]}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="${
    watermelon[0].answerChoices[2]
  }">
  <label class="form-c-label" for="exampleRadios3">
  ${watermelon[0].answerChoices[2]}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="${
    watermelon[0].answerChoices[3]
  }">
  <label class="form-check-label" for="exampleRadios2">
  ${watermelon[0].answerChoices[3]}
    </label>
    </div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>`;
$(".col").append(Question);

console.log($("input:checked").val());
const answer = `${watermelon[0].answer}`;
$(".btn-primary").click(function(e) {
  e.preventDefault()
  if(answer === $("input:checked").val()) {
    console.log("correct")
  } else { 
    console.log("Incorrect")
  }
});
