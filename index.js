const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",                    "U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
                    // "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                    // "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"
                    ];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",                  ","|",":",";","<",">",".","?", "/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let generateBtn = document.getElementById("generate-btn")
let passwordOne = document.getElementById("pwd-display__pwd-one")
let passwordTwo = document.getElementById("pwd-display__pwd-two")
let passwordLengthSlider = document.getElementById("pwd-settings__length-slider")
let includeNumbers = document.getElementById("include-numbers");
let includeSymbols = document.getElementById("include-symbols");

let inputRange = document.getElementById('pwd-settings__length-slider');
let passwordLength = document.querySelector('.pwd-settings__length-label');

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

    for (let i = 0; i < passwordLengthSlider.value; i++) {
        let randomCharactersOne = Math.floor(Math.random() * password.length)
        let randomCharactersTwo = Math.floor(Math.random() * password.length)
        pw1 += password[randomCharactersOne]
        pw2 += password[randomCharactersTwo]
        passwordOne.textContent = pw1;
        passwordTwo.textContent = pw2;
    }
})

function copyToClipboard(password, tooltipId) {
  navigator.clipboard.writeText(password).then(function() {
    const tooltip = document.getElementById(tooltipId)
    tooltip.style.visibility = "visible"
    setTimeout(() => {
      tooltip.style.visibility = "hidden"
    }, 2000);
  }).catch(function(err) {
    console.error('Unable to copy password', err)
  })
}

function addCopyPasswordListener(buttonId, passwordId, tooltipId) {
  document.getElementById(buttonId).addEventListener("click", function() {
    let password = document.getElementById(passwordId).innerText
    const tooltip = document.getElementById(tooltipId)
    if (password && password.trim() !== "") {
      tooltip.innerText = 'Copied!'
      copyToClipboard(password, tooltipId)
    } else {
      tooltip.innerText = 'Nothing to copy!'
      tooltip.style.visibility = "visible"
      setTimeout(() => {
        tooltip.style.visibility = "hidden"
      }, 2000);
    }
  })
}


addCopyPasswordListener("pwd-display__copy-pwd-one", "pwd-display__pwd-one", "pwd-display__tooltip-one")
addCopyPasswordListener("pwd-display__copy-pwd-two", "pwd-display__pwd-two", "pwd-display__tooltip-two")


// document.getElementById("copy-password-one").addEventListener("click", function() {
//   let password = document.getElementById("password-one").innerText;
//   let textArea = document.createElement("textarea");
//   textArea.value = password;
//   document.body.appendChild(textArea);
//   textArea.select();
//   document.execCommand("copy");
//   document.body.removeChild(textArea);
// });

// document.getElementById("copy-password-two").addEventListener("click", function() {
//   let password = document.getElementById("password-two").innerText;
//   let textArea = document.createElement("textarea");
//   textArea.value = password;
//   document.body.appendChild(textArea);
//   textArea.select();
//   document.execCommand("copy");
//   document.body.removeChild(textArea);
// });


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
