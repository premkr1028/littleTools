let elem = document.getElementById('elem'),
  inputs = document.querySelectorAll('input[type = range]'),
  advanc = false
textArea = document.querySelector('textarea')
function getData(e) {
  let radiusOne = inputs[0].value,
    radiusTwo = inputs[1].value,
    radiusThree = inputs[2].value,
    radiusFour = inputs[3].value
  let borderRadius = !advanc ? `${radiusOne}% ${radiusTwo}% ${radiusThree}% ${radiusFour}%` : `${radiusOne}% ${100 - radiusOne}% ${100 - radiusThree}% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${100 - radiusFour}%`

  elem.style.borderRadius = borderRadius

  textArea.value = `border-radius: ${borderRadius}`
}

function advance() {

  advanc = !advanc
  console.log(advanc)
  if (advanc) {

    document.querySelector('.advance').classList.replace('bg-gray-500', 'bg-green-500')
  } else if (advanc === false) {
    document.querySelector('.advance').classList.replace('bg-green-500', 'bg-gray-500')
  }
  advanc ? textArea.placeholder = `border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;` : textArea.placeholder = `border-radius: 0% 0% 0% 0%`
}
window.onload = () => {
  inputs.forEach(input => input.oninput = (e) => getData(e))
}
let copiedAni = document.querySelector('.copiedAni')
function copy() {
  
  if (textArea.value !== '') {
    window.navigator.clipboard.writeText(textArea.value)
    copiedAni.style.display = 'block'
    copiedAni.style.opacity = '1'
    setTimeout(() =>{
      copiedAni.style.opacity = '0'
      copiedAni.style.display = 'none'
    },600)
  } else {
    textArea.style.borderColor = 'red'
    setTimeout(() => {
      textArea.style.borderColor = 'gray'
    }, 400)
  }
}

// if (window.innerWidth < window.innerHeight) {
//   document.querySelector('.blobgen').classList.remove('flexi')
//   document.querySelector('.settings').style.width = '100%'
//   document.querySelector('.blobPreviewArea').style.width = '100%'
//   document.querySelector('.blobPreviewArea').style.height = '40vh'
// }

function reset() {
  textArea.value = ''
  advanc ? textArea.placeholder = `border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;` : textArea.placeholder = `border-radius: 0% 0% 0% 0%`
  elem.style.borderRadius = '0%'
  inputs.forEach(inpu => {
    inpu.value = 0
  })
}