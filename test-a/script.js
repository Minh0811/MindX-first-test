//Test A-1

let names = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];

console.log(names);

function allLongestStrings(arr) {
  let firstNameLenght = arr[0].length;
let maxName = [];
  console.log(firstNameLenght);
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > firstNameLenght) {
    }
    console.log(arr);
  }
}

allLongestStrings(names);

//Test A-2

let weight = [60, 40, 55, 75, 64]; //Test data
let numbers = [1, 2, 3, 4, 5, 6, 7, 8]; //Test data

function alternatingSums(a) {
  let teamOne = 0;
  let teamTwo = 0;
  for (i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      teamOne += a[i];
    } else {
      teamTwo += a[i];
    }
  }
  console.log(teamOne); //console log the first team
  console.log(teamTwo); //console log the second team
}

//the function will console log the total weight of team one and team two
alternatingSums(weight);
