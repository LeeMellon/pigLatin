// function translate(phrase) {
// for (index = 0; index < phrase.length; index++) {
//   for (i = 0; i < vowels.length; i++ )
//     if (vowels[i] === phrase[0]){
//       pig = phrase.concat("way");
//       console.log(pig);
//     } else if (vowels[i] === phrase[index]){
//       position = index;
//       console.log(position);
//     };
//     };
//   };


//   if (phrase.charAt(0) === 'a' || 'e' || 'i' || 'o' || 'u') {
//   newWord = phrase.concat('ay');
// } else {
//   newWord = phrase;
// };
//   console.log(newWord);
// };




var vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
var outputArray = [];
function work(word) {
  ourWord = word.split(" ");
  ourWord.forEach(function(word) {
    letterArray = (word.toLowerCase().replace(/\W+/g, "")).split("");
    letterArray[0]= letterArray[0].toUpperCase();
    for (i = 0; i < letterArray.length; i++) {
      for (x = 0; x < vowels.length; x++) {
        if (letterArray[i] === vowels[x]) {
          targetLetter = i;
          i += 100;
          if (targetLetter !== x) {
            var newWord = letterArray.join("");
            var first = newWord.slice(0,1);
            var last = newWord.slice(1);
            var final = last.concat(first + "ay");

          } else if (targetLetter === 0) {
            var newWord = letterArray.join("");
            var final = newWord.concat("way");
            console.log(targetLetter, newWord, final);

          } else if (letterArray[0] === 'Q' && letterArray[1] === "u" || letterArray[1] === "U"){
            var newWord = letterArray.join("");
            var first = newWord.slice(0, 2);
            var last = newWord.slice(2);
            var final = last.concat(first + "ay");

          } else if (targetLetter !== 0) {
            var newWord = letterArray.join("");
            var first = newWord.slice(0, targetLetter);
            var last = newWord.slice(targetLetter);
            var final = last.concat(first + "ay");
            console.log(letterArray, newWord, final);

          } else {
            var newWord = letterArray.join("");
            var first = newWord.slice(0, 1);
            var last = newWord.slice(1);
            var final = last.concat(first + "ay");
          };

          outputArray.push(final);
        }
      }
    }
  });
};



$(document).ready(function() {
  $("#phraseForm").submit(function(event) {
    event.preventDefault();
    var phrase = $("#phraseInput").val();

    work(phrase);
    var pigLatin = outputArray.join(" ");
    $("#pigLatin").text(pigLatin);
    $(".output").show();
  });
});
