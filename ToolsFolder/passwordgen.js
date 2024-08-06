let customizationEnable = false;

///generate random password
let generateBtn = document.querySelector(".generate");
let passInput = document.querySelector("#passwordInput");
let passwordRange = document.querySelector("#passwordRange");
let uppercaseAllow = document.querySelector(".upperCase");;
let numberAllow = document.querySelector('.numbers');
let clearInput = document.querySelector('.clearInput')
let spChar = document.querySelector('.special');
let startsWith = document.querySelector('#startsWith')
let endsWith = document.querySelector('#endsWith')
function generatePassword() {
  clearInput.style.display = 'block'
  if (!enableCostomization.checked) {
    customizationEnable = false
  }
  passInput.style.border = '1px solid gray'
  if (customizationEnable == false) {
    let password = "";
    let smallAlpha = "abcdefghijklmnopqrstuvwxyz";
    let capAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nums = '0123456789';
    let special = "!@#$%^&*()_+";
    let all = smallAlpha + capAlpha + nums + special;
    for (i = 0; i < 8; i++) {
      password += all.charAt(Math.floor(Math.random() * all.length))
    }
    passInput.value = password
  } else if (customizationEnable == true) {
    let length = passwordRange.value;
    let password = "";

    let str = "abcdefghijklmnopqrstuvwxyz"
    if (uppercaseAllow.checked) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllow.checked) { str += "0123456789" }
    if (spChar.checked) { str += "!@#$%^&*()_+-=" }



    for (i = 0; i < length; i++) {
      password += str.charAt(Math.floor(Math.random() * str.length))
    }
    if (startsWith.value !== '') {
      password = startsWith.value + (password.slice(0, length - endsWith.value.length))
    }
    if (endsWith.value !== '') {
      console.log(length)
      console.log(password)

      console.log(endsWith.value.length)
      password = password.slice(0, length - endsWith.value.length)
      password += endsWith.value
    }

    if (startsWith.value.length + endsWith.value.length > length) {

      passInput.classList.add('error');
      setTimeout(function() {
        passInput.classList.remove('error');
      }, 300);
       password ="";
      passInput.placeholder = 'you did something wrong'

      passInput.style.border = '1px solid red';
     
    }

    passInput.value = password;

  }
}
clearInput.onclick=()=>{
  passInput.value = ''
}
function copyPassword() {
  if (passInput.value !== '') {
    navigator.clipboard.writeText(passInput.value)
  } else {
    passInput.style.border = '1px solid red'
    passInput.placeholder = 'plz first generate password'
    passInput.classList.add('error');

    // remove the class after the animation completes
    setTimeout(function() {
      passInput.classList.remove('error');
    }, 300);
  }
}

let dropDownImg = document.querySelector(".dropDownImg");

let customizationBox = document.querySelector(".customization");

dropDownImg.addEventListener("click", () => {
  dropDownImg.classList.toggle("rotate-180");
  customizationBox.classList.toggle("hidden");
})


let enableCostomization = document.querySelector(".enableCostomization");
let overlay = document.querySelector('.overlay')
enableCostomization.addEventListener('click', () => {
  if (enableCostomization.checked) {
    customizationEnable = true
    overlay.style.display = 'none'
  }
  else {

    overlay.style.display = 'block'
  }
})
// let passwordRange = document.querySelector('#passwordRange')
let passRangeNum = document.querySelector('#passRangeNum')
// function changeLengthValue(){
//   console.log('megha')
//   passRangeNum.innerText = passwordRange.value + ' : length'
// }

passwordRange.oninput = () => {
  passRangeNum.innerText = passwordRange.value + ' : length'
}