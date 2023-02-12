const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",                    "U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
                    // "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                    // "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"
                    ];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",                  ","|",":",";","<",">",".","?", "/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let generateBtn = document.getElementById("btn")
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let passwordLengthBar = document.getElementById("pwd-length-bar")
let includeNumbers = document.getElementById("numbers");
let includeSymbols = document.getElementById("symbols");

let inputRange = document.getElementById('pwd-length-bar');
let passwordLength = document.querySelector('.pwd-length');
inputRange.addEventListener('input', function() {
  passwordLength.textContent = 'Password Length: ' + inputRange.value;
});

generateBtn.addEventListener("click", function() {
    let password = characters;
    if (includeNumbers.checked) password = [...password, ...numbers];
    if (includeSymbols.checked) password = [...password, ...symbols];
    passwordOne.textContent = "";
    passwordTwo.textContent = "";

    let pw1 = ''
    let pw2 = ''

    for (let i = 0; i < passwordLengthBar.value; i++) {
        let randomCharactersOne = Math.floor(Math.random() * password.length)
        let randomCharactersTwo = Math.floor(Math.random() * password.length)
        pw1 += password[randomCharactersOne]
        pw2 += password[randomCharactersTwo]
        passwordOne.textContent = pw1;
        passwordTwo.textContent = pw2;
    }
})

const switchEl = document.querySelector('input[type="checkbox"]:not(.setting)');

switchEl.addEventListener('change', function() {
  if (this.checked) {
    document.body.style.backgroundColor = '#ECFDF5';
    document.querySelector('h1').style.color = '#2B283A';
    document.querySelector('span').style.color = '#10B981';
    document.querySelector('#sub-title').style.color = '#6B7280';
    document.querySelector('#password-one').style.color = '#5DEF92';
    document.querySelector('#password-two').style.color = '#5DEF92';
    document.querySelector('.pwd-length').style.color = '#6B7280';
    document.querySelector('.numbers').style.color = '#6B7280';
    document.querySelector('.symbols').style.color = '#6B7280';
    document.querySelector('#border').style.color = '#2F3E53';
  } else {
    document.body.style.backgroundColor = '#1F2937';
    document.querySelector('h1').style.color = '#FFFFFF';
    document.querySelector('span').style.color = '#4ADF86';
    document.querySelector('#sub-title').style.color = '#D5D4D8';
    document.querySelector('#password-one').style.color = '#55F991';
    document.querySelector('#password-two').style.color = '#55F991';
    document.querySelector('.pwd-length').style.color = '#D5D4D8';
    document.querySelector('.numbers').style.color = '#D5D4D8';
    document.querySelector('.symbols').style.color = '#D5D4D8';
    document.querySelector('#border').style.color = '#c29861';
  }
});

document.getElementById("copy-password-one").addEventListener("click", function() {
  let password = document.getElementById("password-one").innerText;
  let textArea = document.createElement("textarea");
  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
});

document.getElementById("copy-password-two").addEventListener("click", function() {
  let password = document.getElementById("password-two").innerText;
  let textArea = document.createElement("textarea");
  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
});
