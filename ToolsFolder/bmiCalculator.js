let inputs = document.querySelectorAll('input[type=number]')
let calculateBtn = document.querySelector('.calculate')
let output = document.querySelector('.output')
let out = ''
let clear = document.querySelector('.clear')
let weight, height;
let linkItems = document.querySelectorAll('.nav ul li')
let metricWorkArea = document.querySelector('.workArea')
let usUnitWorkArea = document.querySelector('.usUnitWorkArea')
calculateBtn.onclick = () => {
  out = ''
  if (inputs[0].value > 120 || inputs[0].value < 2 || inputs[0].value !== '') {

    out += ` <p class="text-red-400">
         Please provide an age between 2 and 120. <br>
       </p>`
    output.innerHTML = ''
    output.innerHTML = out
    // return
    // return
  }
  if (inputs[0].value && inputs[1].value && inputs[2].value !== '') {
    if (inputs[0].value > 120 || inputs[0].value < 2) {
      out += ` <p class="text-red-400">
          Please provide an age between 2 and 120. <br>
        </p>`
      output.innerHTML = ''
      output.innerHTML = out
      return
    }
    // if(inputs[0].value > 2 )
    weight = inputs[2].value
    height = inputs[1].value
    let heightInMeter = height / 100
    let bmi = weight / (heightInMeter * heightInMeter)
    let fixedBmi = (bmi.toFixed(2))
    let category;
    let catColor;
    if(fixedBmi> 0 && fixedBmi < 18.5){
      category = 'Underweight'
      catColor ='yellow'
    }else if(fixedBmi > 18.5 && fixedBmi < 25){
      category = 'normal'
      catColor= 'green'
    }else if(fixedBmi > 25 && fixedBmi < 30){
      category = 'Overweight'
      catColor = 'orange'
    }else{
      category = 'obese'
      catColor = 'red'
    }
    output.innerHTML = `
     <hr class="w-full bg-gray-400 h-[1px]">
       <h3 class="bg-yellow-300 px-4 py-1 rounded-sm">Result</h3>
       <p class="text-xl">BMI = ${fixedBmi} (<span id="bmiCat" class=" text-${catColor}-400">${category}</span>)</p>
     `
  } else if (inputs[0].value == '' || inputs[1].value == '' || inputs[2].value == '') {

    if (inputs[0].value > 2) {
      out = ''
    }
    if (inputs[1].value == '') {
      out += ` <p class="text-red-400">
       Please provide positive height value.  <br>
     </p>`

    }
    if (inputs[2].value == '') {
      out += ` <p class="text-red-400">
     Please provide positive weight value.
     </p>`
    }
    output.innerHTML = ''
    output.innerHTML = out
  }
}


clear.onclick = () => {
  console.log('megha')
  output.innerHTML = ''
  inputs[0].value = ''
  inputs[2].value = ''
  inputs[1].value = ''
}
let usUnits = false
linkItems.forEach(link => {
  link.onclick = () => {
    if (link.id == 'metric') {

      metricWorkArea.classList.remove('hidden')
      usUnitWorkArea.classList.add('hidden')

    } else if (link.id == 'us') {
      metricWorkArea.classList.add('hidden')
      usUnitWorkArea.classList.remove('hidden')
    }
    document.querySelector('.active').classList.remove('active')
    link.classList.add('active')
  }
})
let usFixedOut = ''
/// us uunits
let usCalculate = document.querySelector('.calculateUs')
let usInputs = document.querySelectorAll('.forUsUnit')
let usOutput = document.querySelector('.usOutput')
usCalculate.onclick = () => {
  
  if (usInputs[0].value !== '' && usInputs[1].value !== '' && usInputs[2].value !== '' && usInputs[3].value !== '') {
    let feet = usInputs[1].value
    let inches = usInputs[2].value
    let feetToInch = (feet * 12)
    let toInch = +feetToInch + +inches
    console.log(toInch)
    let usWeight = usInputs[3].value
    let usOut = usWeight / (toInch ** 2) * 703
     usFixedOut = usOut.toFixed(2)
    let category;
    let catColor;
    if(usFixedOut> 0 && usFixedOut < 18.5){
      category = 'Underweight'
      catColor ='yellow'
    }else if(usFixedOut > 18.5 && usFixedOut < 25){
      category = 'normal'
      catColor= 'green'
    }else if(usFixedOut > 25 && usFixedOut < 30){
      category = 'Overweight'
      catColor = 'orange'
    }else{
      category = 'obese'
      catColor = 'red'
    }
   console.log(usFixedOut)
    usOutput.innerHTML = `
    <hr class="w-full bg-gray-400 h-[1px]">
         <h3 class="bg-yellow-300 px-4 py-1 rounded-sm">Result</h3>
         <p class="text-xl">BMI = ${usFixedOut} (<span id="bmiCat" class=" text-${catColor}-400">${category}</span>)</p>
    `
  } else if (inputs[0].value == '' || inputs[1].value == '' || inputs[2].value == '') {
  usOutput.innerHTML = ''
    usFixedOut = ''
    if (usInputs[0].value == '') {
      usFixedOut += `<p class="text-red-400">
           Please provide positive Age value.  <br>
         </p>`
    }
    if (usInputs[1].value == '' || usInputs[2].value == '') {
      if (inputs[1].value == '') {
        usFixedOut += ` <p class="text-red-400">
           Please provide positive height value.  <br>
         </p>`

      }
    }
    if (usInputs[3].value == '') {
      usFixedOut += ` <p class="text-red-400">
       Please provide positive weight value.
       </p>`
    }
  // console.log('prem')
  usOutput.innerHTML = usFixedOut
  }
 
}
function clearUs() {
  usInputs[0].value = ''
  usInputs[1].value = ''
  usInputs[2].value = ''
  usInputs[3].value = ''
  usOutput.innerHTML = ''
}

// let BmiData = [
//   'Underweight' , 'Healthy'  , 'Overweight' , 'Obese'
// ]