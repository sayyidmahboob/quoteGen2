// taking variables

const quoteText = document.querySelector(".quote");
const authName = document.querySelector(".author .name");
const quoteBtn = document.querySelector(".btn");

// sound op
const soundBtn = document.querySelector(".sound");

// FUNCTION TO CALL

function rndQ() {
  //   quoteBtn.innerHTML = "Loading Quote...";
  //   console.log("clicked");
  //   random cotes
  fetch("https://api.quotable.io/random").then((res) =>
    res.json().then((result) => {
      // console.log(result);
      quoteText.innerHTML = result.content;
      authName.innerHTML = result.author;
      //   quoteBtn.innerHTML = "New Quote...";
    })
  );
}

// https://api.quotable.io/random

// on click we will fetch data from apis
rndQ();

quoteBtn.addEventListener("click", rndQ);

function speak() {
  let utter = new SpeechSynthesisUtterance(
    "${quoteText.innerText} by ${authName.innerText}"
    //  ${quoteText.innerText} by ${authName.innerText}
  );
  return speechSynthesis.speak(utter);
}
speak();
soundBtn.addEventListener("click", speak);
