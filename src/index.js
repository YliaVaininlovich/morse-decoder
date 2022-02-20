const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  var dec = "";
  var decodeString = "";

  for (var j = 0; j < expr.length / 10; j++) {
    dec = "";
    for (var i = j * 10; i < j * 10 + 9; i = i + 2) {
      if (expr.slice(i, i + 2) == "10") dec = dec + ".";
      else if (expr.slice(i, i + 2) == "11") dec = dec + "-";
      else if (expr.slice(i, i + 2) == "**") {
        dec = dec + "+";
        //i = 10;
      }
    }
    if (dec == "+++++") decodeString = decodeString + " ";
    else decodeString = decodeString + MORSE_TABLE[dec];
  }
  return decodeString;
}

module.exports = {
  decode,
};
