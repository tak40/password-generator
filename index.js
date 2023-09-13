// Define arrays for characters, numbers, and symbols
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
                  ]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// Get DOM elements related to password generation and display
const generateBtn = document.getElementById("generate-btn")
const passwordLengthSlider = document.getElementById("pwd-length-slider")
const includeNumbers = document.getElementById("include-numbers")
const includeSymbols = document.getElementById("include-symbols")
const passwordLength = document.getElementById("pwd-length-label")
const passwordOne = document.getElementById("pwd-text-one")
const passwordTwo = document.getElementById("pwd-text-two")

// Update the label indicating password length based on slider value
passwordLengthSlider.addEventListener('input', function() {
  passwordLength.textContent = 'Password Length: ' + this.value;
})

// Function to generate a random password based on given array and length
function generateRandomPassword(passwordArray, length) {
  let generatedPassword = ''

  // Loop 'length' times to add random characters to the password
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * passwordArray.length)
    generatedPassword += passwordArray[randomIndex]
  }
  return generatedPassword
}

// Function executed when Generate button is clicked
generateBtn.addEventListener("click", function() {
  // Start with a basic character set
  let passwordOptions = characters

  // Include numbers if checked
  if (includeNumbers.checked) passwordOptions = [...passwordOptions, ...numbers]

  // Include symbols if checked
  if (includeSymbols.checked) passwordOptions = [...passwordOptions, ...symbols]

  if (passwordLengthSlider.value < 8) {
    alert('Password length should be at least 8 characters.');
    return;
  }

  // Generate and display passwords
  passwordOne.textContent = generateRandomPassword(passwordOptions, passwordLengthSlider.value)
  passwordTwo.textContent = generateRandomPassword(passwordOptions, passwordLengthSlider.value)
})

// Function to handle clipboard operations
function copyToClipboard(password, tooltipId) {
  navigator.clipboard.writeText(password).then(function() {
    const tooltip = document.getElementById(tooltipId)
    tooltip.style.visibility = "visible"

    // Hide the tooltip after 2 seconds
    setTimeout(() => {
      tooltip.style.visibility = "hidden"
    }, 2000)
  }).catch(err => {
    // Log and handle the error
    console.error('Unable to copy password', err)
    alert('Something went wrong. Please try again.')
  })
}

// Function to add event listener for copying password to clipboard
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
      }, 2000)
    }
  })
}

// Attach copy listeners to buttons
addCopyPasswordListener("copy-pwd-one", "pwd-text-one", "pwd-tooltip-one")
addCopyPasswordListener("copy-pwd-two", "pwd-text-two", "pwd-tooltip-two")

// Toggle switch for dark mode
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
