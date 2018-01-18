var vowels = ["a", "e", "i", "o", "u"];
var outputArray= [];

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





function work(word) {
  ourWord = (word.toLowerCase()).split(" ");
  ourWord.forEach(function(word) {
    letterArray = word.split("");
    for (x = 0; x < vowels.length; x++) {
      for (i = 0; i < letterArray.length; i++) {
        if (letterArray[i] === vowels[x]) {
          targetLetter = i;
          x += 100;
          if (targetLetter === 0) {
            var newWord = letterArray.join("");
            var final = newWord.concat("way");
            console.log(targetLetter, newWord, final)
          } else if (targetLetter !== 0) {
            var newWord = letterArray.join("");
            var first = newWord.slice(0, targetLetter);
            var last = newWord.slice(targetLetter);
            var final = last.concat(first + "ay");
            console.log(targetLetter, newWord, final);
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
