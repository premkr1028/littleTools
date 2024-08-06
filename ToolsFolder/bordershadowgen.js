let elem = document.getElementById('elem'),
  horizSlider = document.getElementById('horizSlider'),
  verticalSlider = document.getElementById('verticalSlider'),
  bluredSlider = document.getElementById('blurRad'),
  spreadSlider = document.getElementById('spreadRad'),
  colorOpa = document.getElementById('colorOpa'),
  choosedColor = document.getElementById('choose-color'), textArea = document.querySelector('textarea')
let inset = document.getElementById('inset-shadow')
let colorInput = document.querySelector('#colorInput')



let h_shadow = 0,
  v_shadow = 5,
  blur = 15,
  spread = 0,
  opacityVal = 0.35,
  color_val = 'black',
  rgb;


function hexToRgb(colorVal, opaVal) {
  let r = parseInt(colorVal.slice(1, 3), 16)
  let g = parseInt(colorVal.slice(3, 5), 16)
  let b = parseInt(colorVal.slice(5, 7), 16)
  return rgb = `rgba(${r},${g},${b},${opaVal})`
  
}
function updateShadow(slider) {
  if (slider.id == 'horizSlider') h_shadow = slider.value
  if (slider.id == 'verticalSlider') v_shadow = slider.value
  if (slider.id == 'blurRad') blur = slider.value
  if (slider.id == 'spreadRad') spread = slider.value
  if (slider.id == 'colorOpa') { opacityVal = slider.value }
  if(slider.id == 'choose-color'){
    colorInput.value = choosedColor.value
  }
  if(slider.id == 'colorInput') { 
    choosedColor.value = colorInput.value
  }
  hexToRgb(choosedColor.value, opacityVal)
  updatePreview()
}

function updatePreview() {
  let boxShadow =`${h_shadow}px ${v_shadow}px ${blur}px ${spread}px ${rgb}` 
  elem.style.boxShadow = inset.checked ? `inset ${boxShadow}` : boxShadow
  textArea.value = inset.checked ?  `box-shadow: inset ${boxShadow}` : `box-shadow: ${boxShadow};`
}
window.onload = () => {
  
  let sliders = document.querySelectorAll('.slider')

  sliders.forEach(slider => {
    slider.oninput = () => {
      updateShadow(slider)


    }
  })
}
function copy(){
  window.navigator.clipboard.writeText(textArea.value)
}


colorInput.onfocus = () =>{
  colorInput.value = '';
  console.log('little')
}



// if(window.innerWidth<window.innerHeight){
//   document.querySelector('.borderShadowGen').classList.remove('flexi')
//   document.querySelector('.settings').style.width = '100%'
//    document.querySelector('.shadwoPreviewArea').style.width = '100%'
//   document.querySelector('.shadwoPreviewArea').style.height = '40vh'
//     }

// console.log(toolsArr)