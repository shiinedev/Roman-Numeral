const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

const decimalToRoman = () =>{
    const inputValue =input.value;
  
  if(inputValue === ""){
    output.textContent = "Please enter a valid number";
  }else if(inputValue < 1){
    output.textContent ="Please enter a number greater than or equal to 1"
  }else if(inputValue > 3999){
    output.textContent = "Please enter a number less than or equal to 3999";
  }
  else {
    
    let roman = '';
  
  // Loop through each symbol in the Roman numeral table
  for (let i = 0; i < romanNumerals.length; i++) {
    while (input.value >= romanNumerals[i].value) {
      roman += romanNumerals[i].symbol;  // Add the corresponding symbol
      input.value -= romanNumerals[i].value;     // Subtract the value from the number
    }
  }

   output.textContent = roman;
  }
}


convertBtn.addEventListener("click", decimalToRoman);