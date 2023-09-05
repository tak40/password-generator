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


// TOGGLE SWITCH FOR DARK MODE

const toggleSwitch = document.getElementById('toggle-switch')

toggleSwitch.addEventListener('change', function() {
  if (toggleSwitch.checked) {
      document.body.classList.add('light-theme')
      document.body.classList.remove('dark-theme')
  } else {
      document.body.classList.add('dark-theme')
      document.body.classList.remove('light-theme')
  }
})

