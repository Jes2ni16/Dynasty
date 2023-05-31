

let dynastyReign =[
    {name:'San Dynasty', value:"MXLI"},
{name:'Villoria Dynasty', value:'MCCCIIII'},
{name:'Tan Dynasty', value:'MCCCXCVIII'},
{name:'Bon Dynasty', value:'MCDLXV'},
{name:'Maiko Dynasty', value:'DCLXIV'},
{name:'Paul Dynasty', value:'MMXLIX'},
{name:'Andrew Dynasty', value:'MMMXICX'}
];
let decide='';
function convertInt(romanNumeral) {
    var romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };  

  let integerValue=0;
  let regex=/q|W|E|R|T|Y|U|O|P|A|S|F|G|H|J|K|Z|B|N/ig;
  let result= regex.test(romanNumeral);
  for (let i = 0; i < romanNumeral.length; i++) {
    const pattern = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    if (!pattern.test(romanNumeral)) {
      return "invalid"; 
    }
    const invalidSequences = ["IIII", "VV", "XXXX", "LL", "CCCC", "DD"];
    for (const sequence of invalidSequences) {
      if (romanNumeral.includes(sequence)) {
        return "invalid"; // Found an invalid sequence of characters
      }
    }
    const repeatedSubtractionChars = ["CM", "CD", "XC", "XL", "IX", "IV"];
    for (const char of repeatedSubtractionChars) {
      if (romanNumeral.includes(char + char)) {
        return "invalid"; 
      }
    }
  

    
  }




if(result==true){
  return "Invalid";
}
else{
    for (let i = 0; i < romanNumeral.length; i++) {
      let currentDigit = romanNumerals[romanNumeral[i]];
      let nextDigit = romanNumerals[romanNumeral[i + 1]];

      if (nextDigit && currentDigit < nextDigit) {
        integerValue -= currentDigit;//integerValue = integerValue-currentdigit;
      } else {
        integerValue += currentDigit;//integerValue = integerValue+currentdigit;
      }

    }
    return integerValue;}
  }


function find(roman) {
    let largestYear = 0;
  let top=roman[0].name;
  for(let i=0; i<roman.length;i++){
    let year = convertInt(roman[i].value);
    if (year > largestYear) {
      largestYear = year;
      top=roman[i].name;
    }
  }
    return top;
  }

  


 
console.log(find(dynastyReign));

 



