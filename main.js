const watermelon = [
  {
    question: "The first recorded watermelon harvest was in which place?",
    answerChoices: ["China", "Cuba", "Egypt", "Poland"],
    answer: "Egypt",
    gif: "images/gif1.gif",
  },
  {
    question:
      "According to the Guinness World records, how big was the biggest watermelon recorded?",
    answerChoices: [
      "26.50 pounds",
      "350.50 pounds",
      "30.00 pounds",
      "478.90 pounds",
    ],
    answer: "350.50 pounds",
    gif: "images/gif2.gif",
  },
  {
    question: "About what percentage of watermelon is water?",
    answerChoices: ["92%", "91%", "93%", "97%"],
    answer: "92%",
    gif: "images/gif3.gif",
  },
  {
    question: "Which vitamin type Isn't In watermelon?",
    answerChoices: ["A", "C", "B", "D"],
    answer: "D",
    gif: "images/gif4.gif",
  },
  {
    question: "About how many calories per 100 grams in watermelon is there?",
    answerChoices: ["60", "30", "20", "90"],
    answer: "30",
    gif: "images/gif5.gif",
  },
  {
    question: "Is watermelon a fruit?",
    answerChoices: ["Yes", "No"],
    answer: "Yes",
    gif: "images/gif6.gif",
  },
  {
    question: "Which temperature range should your watermelon be grown in?",
    answerChoices: [
      "70 to 90 degrees",
      "40 to 60 degrees",
      "100 to 120 degrees",
      "-70 to 5 degrees",
    ],
    answer: "70 to 90 degrees",
    gif: "images/gif7.gif",
  },
  {
    question: "Is watermelon healthy?",
    answerChoices: ["Yes", "No"],
    answer: "Yes",
    gif: "images/gif8.webp",
  },
  {
    question:
      "Per 100 grams of watermelon, about how many grams of sugar Is there?",
    answerChoices: ["0 grams", "2 grams", "6 grams", "10 grams"],
    answer: "6 grams",
    gif: "images/gif9.webp",
  },
  {
    question: "What percentage of watermelon is water?",
    answerChoices: ["90%", "93%", "60%", "92%"],
    answer: "92%",
    gif: "images/gif10.webp",
  },
];
$(".gif").hide();
$(".next").hide();

let questionCount = 0;
const Question = `<form>
<h2>${watermelon[questionCount].question}</h2>
                       
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioButtons" id="radios1" value="${watermelon[questionCount].answerChoices[0]}" checked>
  <label class="form-check-label" for="radios1">
  ${watermelon[questionCount].answerChoices[0]}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioButtons" id="radios2" value="${watermelon[questionCount].answerChoices[1]}">
  <label class="form-check-label" for="radios2">
  ${watermelon[questionCount].answerChoices[1]}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioButtons" id="radios3" value="${watermelon[questionCount].answerChoices[2]}">
  <label class="form-c-label" for="radios3">
  ${watermelon[questionCount].answerChoices[2]}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioButtons" id="radios4" value="${watermelon[questionCount].answerChoices[3]}">
  <label class="form-check-label" for="radios4">
  ${watermelon[questionCount].answerChoices[3]}
    </label>
    </div>
<button type="submit" class="submit btn btn-primary">Submit</button>
</form>`;
$(".question").append(Question);

console.log($("input:checked").val());
const answer = `${watermelon[questionCount].answer}`;
$(".submit").click(function (e) {
  e.preventDefault();
  if (answer === $("input:checked").val()) {
    $("form").hide();
    $(".answer-check").text("correct");
    $(".gif").show();
    $(".next").show();
    $(".gif-container").append(
      $(".gif").attr("src", watermelon[questionCount].gif)
    );
  } else {
    $("form").hide();
    $(".answer-check").text("incorrect");
    $(".gif").show();
    $(".next").show();
    $(".gif-container").append(
      $(".gif").attr("src", watermelon[questionCount].gif)
    );
  }
});

$(".next").click(function (e) {
  e.preventDefault();
  questionCount++;
});
