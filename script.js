// taking variables

const quoteText = document.querySelector(".quote");
const authName = document.querySelector(".author .name");
const quoteBtn = document.querySelector(".btn");

// sound op
const soundBtn = document.querySelector("sound");

// FUNCTION TO CALL

function rndQ() {
  //   quoteBtn.innerHTML = "Loading Quote...";
  //   console.log("clicked");
  //   random cotes
  fetch("https://api.quotable.io/random").then((res) =>
    res.json().then((result) => {
      console.log(result);
      quoteText.innerHTML = result.content;
      authName.innerHTML = result.author;
      //   quoteBtn.innerHTML = "New Quote...";
    })
  );
}

// https://api.quotable.io/random

// on click we will fetch data from apis

quoteBtn.addEventListener("click", rndQ());

soundBtn.addEventListener("click", () => {
  let utter = new SpeechSynthesisUtterance(
    " ${quoteText.innerText} by ${authName.innerText}"
  );
  speechSynthesis.speak(utter);
});
