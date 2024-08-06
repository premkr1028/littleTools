// let smallInputsBox = document.querySelector('.smallInput')
// let smallInputsEelm = ['Phone', 'Email', 'Location']
// smallInputsEelm.map(element => smallInputsBox.innerHTML += `
// <input type="text" class="smipBox w-8vw flex justify-center text-center text-[1.5vw] outline-none font-normal" placeholder="${element}" id="${element.toLowerCase()}"  /> 
// `)

// let uperPart = document.querySelector('.uperPart')
// uperPart.addEventListener('click', () => {
//   uperPart.style.border = '1px solid lightblue'
// })
// uperPart.addEventListener('mouseleave', () => {
//   uperPart.style.border = 'none'
// })




// function changeIntoTextarea() {
//   console.log('megha')
//   document.querySelector('.ipAndText').innerHTML = `<textarea type="text" class="summaryInput w-full flex justify-center text-[1.8vw] outline-none font-normal mt-1" placeholder="What's the best thing which makes you best candidate for this job?" id="summaryInput"> </textarea>`
// }



// let skills = []
// let skillsUl = document.querySelector('.skillsUl')
// let ip = document.querySelector('.skillsUl input')

// let ipVal;
// function createSkill() {
//   document.querySelectorAll('li').forEach(li => li.remove())
//   skills.forEach(skil => {

//     let skTag = `<li class="ski">${skil}
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="cross"><g><path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z"></path><path d="M22.71 9.29a1 1 0 0 0-1.42 0L16 14.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L17.41 16l5.3-5.29a1 1 0 0 0 0-1.42Z"></path></g></svg>
//     </li>`
//     skillsUl.insertAdjacentHTML('afterbegin', skTag)
//   })
// }
// function addSkill() {
//   ipVal = ip.value
//   if (ip.value !== '') {
//     console.log(ipVal)
//     console.log(ip.value.split(','))
//     ip.value.split(',').map(element => {
//       skills.push(element)
//       console.log(skills)
//       ip.value = '';
//       ip.placeholder = 'Enter more skills'
//       createSkill()
//     })
//   } else {
//     alert(
//       `you dedn't enter anything in skills section`
//     )
//   }
// }

// function addExp(e) {
//   console.log(e.target.value)
//   let exp = `
//      <div class="exIps flex gap-1 w-[100%]">
//        <span>
//          &bull;
//        </span>
//        <ul>
//        <li>${e.target.value}</li>
//        </ul>
//      </div> 
//     `
//   // exps.insertAdjacentHTML('afterbegin', exp)
//   // if(expCount === 1){
//   //    exps.innerHTML = exp
//   // } else if(expCount > 1){
//   //   exps.innerHTML += exp
//   // }
//   expArr.push(exp)
//   document.querySelectorAll('.expIput').forEach(li => li.remove())
//   document.querySelectorAll('.exIps').forEach(li => li.remove())
//   expArr.forEach(expe => {

//     if (expArr.length === 1) {
//       exps.innerHTML = expe
//     } else {
//       if (e.key === 'Enter') {

//         // 
//         exps.innerHTML += expe
//       } else {
//         exps.innerHTML += expe
//       }
//     }
//   }
//   )
// }
// let expArr = []
// let expCount = 0
// let exps = document.querySelector('.exps')
// let expIput = document.querySelector('.expIput')
// expIput.addEventListener('keyup', (e) => {
//   if (e.key === 'Enter') {
//     // expCount++
//     console.log('megha')
//     if (expIput.value !== '') {
//       console.log('i m in')
//       // expArr.push(exp)
//       addExp(e)
//       // console.log(exp)
//       // console.log(expArr)
//       // expArr.forEach(elem => )
//     }

//   }
// })
// let expBtn = document.querySelector('.expBtn
// let exps = document.querySelector('.exps')
// let expCount = 1
// function addExpe() {
//   expCount++
//   if (expCount < 5 && expArr.length !== 0) {
//     exps.innerHTML += `<input type="text" class="expIput w-[90%] text-[1.8vw]" placeholder="Write your experience and press enter to save.">`
//     document.querySelector('.exps .expIput').addEventListener('keyup', (e) => {
//       if (e.key === 'Enter') {
//         console.log('megha')
//         if (expIput.value !== '') {
//           console.log('i m in')

//           addExp(e)

//         }

//       }
//     })
//   } else if (expArr.length == 0) {
//     alert(`didn't enter anything in experience section`)
//   } else {
//     alert('you can only add 4 experiences')
//   }


// }


// let resumesDiv = document.querySelector('.resumes')

// let imgWidth;
// let imgHeight;

// let downBtn = document.querySelector('.convt')
// downBtn.onclick = ()=>{
// print()
// document.querySelector('#meghu').style.scale = '0.3'
// domtoimage.toJpeg(document.getElementById('meghu')).then(data=>{
//   let linkTag =document.createElement('a')
//    linkTag.download =  'pixelArt.jpeg'
//    linkTag.href = data
//    linkTag.click()
// })   
// html2canvas(document.querySelector('.uperPart')).then(function(canvas) {

//  var imgData = canvas.toDataURL('image/png'); 


// var img = new Image();
// img.src = imgData;/
// console.log(img.src)
// console.log(img.src.slice(5))
// document.body.appendChild(img);
// });
// }
// function downRes(){
//   // console.log('megha')
//   domtoimage.toPng(resumesDiv).then((data) =>{
//     console.log('megha')
//     console.log(data)
//   })
// }


//न्यूस्त्रत
let alerDiv =document.querySelector('.alerDiv')
let saveAlert = document.querySelector('.saveAlert')
let pageCountDynamic =  document.querySelector('#pageCountDynamic')
let resumePreview = document.querySelector('.resumePreview')
let cont = document.querySelector('.container')
let dataEntry = false
let addSum = false
let nextPageBtn = document.querySelector('.next')
let prevPageBtn = document.querySelector('.prev')
let pageSlide = 0
/// resume preview
let finalPreview = document.querySelector('.pr')

var previewOfResumes = document.getElementById('previewOfResumes')
function priviewPageShow() {
  previewOfResumes.style.display = 'flex'
  finalPreview.innerHTML = mainPreviewBody.innerHTML
  mainWalaDiv.style.display = 'none'
  cont.style.backgroundColor = 'black'
}
///
let mainWalaDiv= document.querySelector('.main')
function nextBtnWork(e) {
if(pageSlide === 4){
  nextPageBtn.innerHTML = ` <p class="nextP text-xs pointer-events-none">Preview</p><i class="fa-solid pointer-events-none	 fa-eye"></i>`
  nextPageBtn.style.backgroundColor = '#90EE90'
}
  let goPrev = nextPageBtn.parentElement.parentElement.parentElement.children[1].children[pageSlide - 1]

  let curDiv = nextPageBtn.parentElement.parentElement.parentElement.children[1].children[pageSlide]
  goPrev.classList.add('hidden')
  curDiv.classList.remove('hidden')
  pageCountDynamic.innerText = pageSlide+1
  saveAlert.style.display = 'flex'
 setTimeout(()=>{
    saveAlert.style.opacity = 1
 },50)
  setTimeout(()=>{
    saveAlert.style.opacity = '0'
    setTimeout(()=>{
        saveAlert.style.display = 'none'
     },50)
  },1000)
}
nextPageBtn.onclick = (e) => {

  if(nextPageBtn.children[0].innerText == 'Preview'){
    priviewPageShow()
  }

  if (pageSlide > 4) {
    pageSlide = 4
  }
  if (!dataEntry) {
    alerDiv.style.display = 'flex'
    alerDiv.innerText = `plz fill personal information first`
    setTimeout(()=>{
      alerDiv.style.display = 'none'
    },1000)
    return
  }


  if (!addSum && pageSlide === 1) {
    
    pageSlide = 1
    alerDiv.style.display = 'flex'
    alerDiv.innerText = `plz fill summary`
    setTimeout(()=>{
      alerDiv.style.display = 'none'
    },1000)
    return
  }
  pageSlide++
  if (pageSlide === 4 || pageSlide > 4) {
    nextPageBtn.innerHTML = ` <p class="nextP text-xs pointer-events-none">Preview</p><i class="fa-solid pointer-events-none	 fa-eye"></i>`
    pageSlide = 4
    // nextPageBtn.classList.add('dikhao')
  }
  if (pageSlide < 5) {
    nextBtnWork(e)
  }
}

prevPageBtn.onclick = (e) => {

  if (pageSlide == 0) {
    return
  }
  if (pageSlide === 4) {
    nextPageBtn.classList.remove('dikhao')
    nextPageBtn.innerHTML = `    <p class="nextP text-xs pointer-events-none">Next</p><i
                  class="fa-solid pointer-events-none	 fa-arrow-right"></i>`
    nextPageBtn.style.backgroundColor = 'var(--color)'
  }
  pageSlide--
  let jaa = e.target.parentElement.parentElement.parentElement.children[1].children[pageSlide + 1]

  let aaa = e.target.parentElement.parentElement.parentElement.children[1].children[pageSlide]
  jaa.classList.add('hidden')
  aaa.classList.remove('hidden')
  console.log(pageSlide)
   pageCountDynamic.innerText = pageSlide+1
}

//Add education lis


let add_eduBtn = document.querySelector('.add-edu')

let entries_cont = document.querySelector('.datas')
let eduForm = 1
function addEdu() {
  eduForm++
  entries_cont.innerHTML += `<div class="entries w-full flex flex-col mt-[12px] gap-[8px] p-[10px] border-[1px] border-gray-300 rounded-md relative">
  <span class="absolute deleteEdu right-0 top-0 ">
  <i class="fa-regular fa-circle-xmark"></i>
  </span>
              <div class="universityName relative">
                 <input required id="universityNameInput" class="eduInputs" type="text">

                 <label for="universityNameInput">
                  University Name
                 </label>
               </div>
               <div class="degg-det grid grid-cols-2 w-full">
                 <div class="degree flex flex-col gap-[3px] relative">

                   <input required type="text" id="degInput" class="eduInputs w-[200px] h-[40px]">
                   <label for="degInput">
                     Degree
                   </label>
                 </div>
                 <div class="major flex flex-col gap-[3px] relative">

                   <input required type="text" id="majorInput" class="eduInputs">
                   <label for="majorInput">
                    Major
                   </label>
                 </div>
               </div>

              <div class="eduDuration grid grid-cols-2 w-full flex">
                <div class="st-date">
            <p class='relative' for="st-dateInput">
              Start-Date
            </p>    
                  <input class="eduInputs" id="st-dateInput" type="date" value="2005-10-10">
                </div>
                <div class="ed-date">
                  <p class='relative' for="ed-dateInput">
                    End-Date
                  </p>
                   <input type="date" id="ed-dateInput" class="eduInputs" value="2008-12-28">
                </div>
              </div>
             

              
              <div class="uniDiscription w-full relative">
                 <textarea class="eduInputs" required id="uniDiscriptinInput"></textarea>
                 <label for="uniDiscriptinInput">
                 Discription
                 </label>
               </div>
             </div>`
  let del_eduBtn = document.querySelectorAll('.deleteEdu')
  del_eduBtn.forEach(btn => {
    btn.onclick = () => {
      eduForm--
      btn.parentElement.remove()
      add_eduBtn.style.display = 'block'
    }
  }

  )
  if (eduForm > 2) {
    add_eduBtn.style.display = 'none'
  }
}
add_eduBtn.onclick = () => {
  console.log('megha')
  addEdu()
}



///Adding PE


let peDatasDiv = document.querySelector('.peDatas')
let peForms = 1
let add_PeBTn = document.querySelector('.add-pe')
function addPe() {

  peForms++

  peDatasDiv.innerHTML += ` <div class="relative peEntries w-full flex flex-col mt-[12px] gap-[8px] p-[10px] border-[1px] border-gray-300 rounded-md">
  <span class="absolute deletePe right-0 top-0 ">
    <i class="fa-regular fa-circle-xmark"></i>
    </span>
              <div class="prev-title-comp grid grid-cols-2 w-full mt-[10px]">
                 <div class="prev-title flex flex-col gap-[3px] relative">

                   <input required type="text" id="prev-titleInput" class="peInputs w-[200px] h-[40px]">
                   <label for="prev-titleInput">
                    Previous title
                   </label>
                 </div>
                 <div class="companyName flex flex-col gap-[3px] relative">

                   <input required type="text" id="companyNameInput" class="peInputs">
                   <label for="companyNameInput">
                    Company name
                   </label>
                 </div>
               </div>
              <div class="pe-city-state grid grid-cols-2 w-full mt-[10px]">
                 <div class="city flex flex-col gap-[3px] relative">

                   <input required type="text" id="cityInput" class="peInputs w-[200px] h-[40px]">
                   <label for="cityInput">
                    City
                   </label>
                 </div>
                 <div class="state flex flex-col gap-[3px] relative">

                   <input required type="text" id="stateInput" class="peInputs">
                   <label for="stateInput">
                    State
                   </label>
                 </div>
               </div>
              <div class="peDuration grid grid-cols-2 w-full flex mt-[8px]">
                <div class="st-date">
              <p class="relative">
              Start-Date
              </p>    
                  <input id="pe-st-dateInput" class="peInputs" type="date" value="2005-10-10">
                </div>
                <div class="pe-ed-date">
                  <p class='relative'>
                    End-Date
                  </p>
                   <input type="date" id="ed-dateInput" class="peInputs" value="2008-12-28">
                </div>
              </div>
              <div class="peSummaryDiv w-full relative mt-[8px]">
                 <textarea required id="peSummaryInput" class="peInputs"></textarea>
                 <label for="peSummaryInput">
                   Add Summary
                 </label>
               </div>
            </div>`
  let del_eduBtn = document.querySelectorAll('.deletePe')
  del_eduBtn.forEach(btn => {
    btn.onclick = () => {
      peForms--
      btn.parentElement.remove()
      add_PeBTn.style.display = 'block'
    }

  }


  )
  if (peForms > 2) {
    add_PeBTn.style.display = 'none'
    return
  }
}
add_PeBTn.onclick = () => {
  addPe()
}
//Add skills

let add_skillBtn = document.querySelector('.add-skill')
let skill_dataDiv = document.querySelector('.skill-data')

add_skillBtn.onclick = () => {
  skill_dataDiv.innerHTML += `
  
  <div class="skillEntries w-full flex flex-col mt-[12px] gap-[8px] p-[10px] border-[1px] border-gray-300 rounded-md relative">
  <span class="absolute deleteSkill right-0 top-0 ">
    <i class="fa-regular fa-circle-xmark"></i>
    </span>
                <div class="skill relative">
                  <input class="skillInputs" required type="text" id="skillInput">
                  <label for="skillInput"> Skill Name</label>
                </div>
              </div`
  let del_eduBtn = document.querySelectorAll('.deleteSkill')
  del_eduBtn.forEach(btn => {
    btn.onclick = () => {
      btn.parentElement.remove()
    }
  }
  )

}


//change theme:
let themeBtn = document.querySelector('#theme-input')

themeBtn.onchange = () => {
  console.log(themeBtn.value)
  let r = document.querySelector(':root')
  var rs = getComputedStyle(r);
  r.style.setProperty('--color', themeBtn.value);
}

//Add add Personal Info
let mainPreviewBody = document.querySelector('.resumePreview')
let personalData = document.querySelector('.personalData')
function addPersonalInfo() {
  let personalInfoInputs = document.querySelectorAll('.firstInpu')
  // if
  let aage = 0
  personalInfoInputs.forEach((inpus) => {
    if (!inpus.value == '') {
      aage++
    }

    // console.log(aage)
  })
  if (aage == 6) {
    resumePreview.style.borderWidth = '1px'
    pageSlide++
    nextBtnWork()
    dataEntry = true
    let personalInfoObj = {
      firstName: '',
      lastName: '',
      jobTitle: '',
      address: '',
      phone: '',
      email: ''
    }

    personalInfoInputs.forEach((input, index) => {
      personalInfoObj[index] = input.value
    })

    let personalInfoSec = `<div class="upper w-full flex flex-col items-center">
                <div class="prName font-bold text-[3vmax] flex gap-[5px]">
                  <h1 class="fName uppercase">
                    ${personalInfoObj[0]}
                  </h1>
                  <h1 class="lName uppercase">
                   ${personalInfoObj[1]}
                  </h1>
                </div>
                <p class="prRole text-[2vmax] font-semibold">${personalInfoObj[2]}</p>
                <p class="prAdd text-[2vw]">
                 ${personalInfoObj[3]}
                </p>
                <div class="em-ph flex w-full justify-between text-[1.2vw] mt-[8px]">

                  <h3 class="prPhone">
                    ${personalInfoObj[4]}
                  </h3>
                  <h3 class="prEmail">
                   ${personalInfoObj[5]}
                  </h3>
                </div>
              </div>`
    console.log(mainPreviewBody)
    personalData.innerHTML = personalInfoSec

  } else {
    alert('plz fill all the fields')
  }
}

//Adding summaray
let sumDiv = document.querySelector('.sumDiv')
let prSummary = document.querySelector('#summaryInput')
function addPrSummary() {


  if (prSummary.value == '') {
    prSummary.classList.add('error')
    setTimeout(() => {
      prSummary.classList.remove('error')
    }, 200)
    return
  }
  let sumData = `
  <div style="border-color: var(--color);" class="prSummrayDiv w-full border-t-[3px] rouBor  mt-[5px]">
    <p class="text-md">
     ${prSummary.value}
    </p>
  </div>
  `
  console.log(sumDiv)
  addSum = true

  sumDiv.innerHTML = sumData
  pageSlide++
  nextBtnWork()
}

//Adding professional experience


let prPeDiv = document.querySelector('.prPeDiv')
function addProfesionalExp() {
  let peDataObjArr = []
  let peInputsAll = document.querySelectorAll('.peInputs')

  peInputsAll.forEach(inputs => {
    peDataObjArr.push(inputs.value)
  })

  const perChunk = 7 // items per chunk    

  const result = peDataObjArr.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])


  let upPart = ` <h1 style="color: var(--color);" class="text-center text-xl font-bold">Personal Experience</h1>
  <div style="background-color: var(--color);" class="prPeLine w-full h-[3px]  mt-[3px] mb-[5px]"> </div>`

  let prExpTemplate = ''

  result.map((res, index) => {
    prExpTemplate = ` <div class="prPeDatas w-full flex flex-col gap-[4px] mb-[10px]">
       <h1 style="color: var(--color);" class="jobTitle text-start text-l font-bold">
         ${res[0]}
       </h1>
       <div class="companyName-add-duration w-full text-[1.3vw] flex justify-between">
         <div class="name-add flex gap-[3px]">
           <h2 class="cName">
             ${res[1]},
           </h2>
           <h2 class="state">
            ${res[2]},
           </h2>
           <h2 class="city">
            ${res[3]}
           </h2>
         </div>
         <div class="dura flex gap-[4px] text-[1.3vw]">
           <p class="start">
             ${res[4]}
           </p>
           <p>To</p>
           <p class="end">
             ${res[5]}
           </p>
         </div>
       </div>
       <p class="prSummary w-full text-md">
        ${res[6]}
       </p>
     </div>`
    if (index > 0) {
      prPeDiv.innerHTML += prExpTemplate
    } else {
      prPeDiv.innerHTML = upPart + prExpTemplate
    }

  })

  pageSlide++
  nextBtnWork()

}
//Adding Education
let prEduDet = document.querySelector('.prEduDet')
function addEduDatas() {
  let eduDataObjArr = []
  let eduInputsAll = document.querySelectorAll('.eduInputs')

  eduInputsAll.forEach((inputs, index) => {
    eduDataObjArr.push(inputs.value)
  })

  const perChunk = 6 // items per chunk 

  const result = eduDataObjArr.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])

  let upperPart = ` <h1 style="color: var(--color);" class="text-center text-xl font-bold">Education</h1>
              <div style="background-color: var(--color);" class="prEduLine w-full h-[3px] mt-[3px] mb-[5px]"> </div>`

  let eduDataTemplate = ''
  result.map((res, ind) => {
    eduDataTemplate = `
    <div class="prEduData w-full mb-[10px]">
      <h1 style="color: var(--color);" class="uniName text-l text-purple-400 font-bold">
       ${res[0]}
      </h1>
      <div class="deg-dura text-[1.2vw] flex justify-between">
        <div class="flex gap-[3px]">
          <h2 class="deg">
           ${res[1]}
          </h2>
          <h2 class="major">
            ${res[2]}
          </h2>
        </div>
        <div class="dura flex gap-[4px]">
          <p class="start">
            ${res[3]}
          </p>
          <span>-</span>
          <p>
            ${res[4]}
          </p>
        </div>
      </div>
      <p class="summary w-full text-md">
        ${res[5]}
      </p>
    </div>
    `

    if (ind > 0) {
      prEduDet.innerHTML += eduDataTemplate

    } else {
      prEduDet.innerHTML = upperPart + eduDataTemplate
    }
  })
  pageSlide++
  nextBtnWork()
}


///Add skills
let prSkillDet = document.querySelector('.prSkillDet')

function addSkillsFunc() {


  let skillInputsAll = document.querySelectorAll('.skillInputs')
  let skillArr = []
  skillInputsAll.forEach((inputs, ind) => {
    skillArr.push(inputs.value)
  })


  let upper = `  <h1 style="color: var(--color);" class="text-center text-xl font-bold">Skills</h1>
              <div style="background-color: var(--color);" class="prSkillLine w-full h-[3px] mt-[3px] mb-[5px]"></div>
              <ul class="prSkillDetUl grid grid-cols-3 gap-[15px] text-md ">

              </ul>
              `

  prSkillDet.innerHTML = upper
  let prSkillDetUl = document.querySelector('.prSkillDetUl')
  skillArr.map((skill, index) => {
    console.log(skill, index)
    prSkillDetUl.innerHTML += `<li class ="flex justify-center items-center gap-[4px]" id="${index}"><span>&FilledSmallSquare;</span><h2>${skill}</h2></li>`
  })
}


document.addEventListener('click', (e) => {
  // console.log(e.target.children[0].innerText)
  if (e.target.classList.contains('dikhao') && pageSlide === 4) {
    // previewOfResumes.style.display = 'flex'
    cons
  }
})



let closePeview = document.querySelector('.closePeview')

closePeview.onclick = () => {
  {
    previewOfResumes.style.display = 'none'
     mainWalaDiv.style.display = 'flex'
    cont.style.backgroundColor = '#ffffe0'
  }
}

function printResume(){
  window.print()
}
function downResumePreview(){

  domtoimage.toJpeg(finalPreview).then(data=>{
     // console.log(data)
     let linkTag =document.createElement('a')
     linkTag.download =  'pixelArt.jpeg'
     linkTag.href = data
     linkTag.click()
   })
}

function clearPersonalInfo(){
  let allInput = document.querySelectorAll('.firstInpu')
allInput.forEach(inputs =>{
  inputs.value = ''
})
}
function clearSumm(){
  let textArea = document.querySelector('textarea')
  textArea.value = ''
}


function clearProfessionalExp(){
  let allInputs = document.querySelectorAll('.peInputs')

  allInputs.forEach(input =>{
    input.value = ''
  })
}

function clearEdu(){
  let allInputs = document.querySelectorAll('.eduInputs')
  allInputs.forEach(input =>{
    input.value = ''
  })
}

function clearSkills(){
  let allInputs = document.querySelectorAll('.skillInputs')
  allInputs.forEach(input =>{
    input.value = ''
  })
}