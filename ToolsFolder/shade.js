let colorCont = document.querySelector('.colorCont')
let shadeColorFilterArr = []
let shadesArrNew = ["gray", "aqua", "brown", "blue", "cyan", "green", "orange", "red", "yellow", "purple", "pink"]
function little(color) {
  colorObjectArr.push(color)

  shadeColorFilterArr = colorObjectArr.filter((val, index, self) => {
    return self.indexOf(val) === index;
  })
  // console.log(shadeColorFilterArr)

  colorCont.innerHTML = ''
  shadeColorFilterArr.map(shade_color => {
    // console.log(shade_color)
    let colorBox = document.createElement('div')
    colorBox.classList.add('color-box')
    // colorBox.innerHTML = '';
    // console.log(shade_color.hex)
    colorBox.innerHTML = `
        <div class="color w-[100%] h-[75%] bg-[${shade_color.name}] flex justify-center items-center">
        <p class="innerCpoyText bg-white px-[1.6vw] py-[5px] text-[1.7vw] rounded opacity-[0]">#${shade_color.hex} copied!</p>
        </div>
        <div class="color-name-or-cp flex justify-between items-center px-1 mt-[5px] h-[25%] ">
          <p class="name text-[2vw] text-black">${shade_color.name}</p>
          <div class="cp h-[100%] w-[5vw] p-[0.5px] flex justify-center items-center">
           <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
           xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 115.77 122.88" style="enable-background:new 0 0 115.77 122.88" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0"  d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"/></g></svg>
          </div>
        `
    
    colorCont.appendChild(colorBox)

  })


}
let colorObjectArr = []
let cc = localStorage.getItem('shadeName')
let headTagNew = document.querySelector('.head')
// console.log(cc)
let local_shade_val = localStorage.getItem('search_List_val')
let headTag = document.querySelector('.head')
// 
/*
if(cc == null && local_shade_val == null){
  headTag.innerHTML = 'No Shades Found'
}
if (cc == null) {
 headTag.innerText = `${local_shade_val} color shades`

} else {
  document.querySelector('.head').innerText = `${cc} color shades`
}*/
if(shadesArrNew.includes(cc)){
  headTagNew.innerText = `${cc} color shades`
}else{
  headTagNew.innerText =` This name Shades aren't available`
}

if(!cc){
  headTagNew.innerText = `${local_shade_val} color shades`
}
function fetchApi() {

  let api = `https://www.csscolorsapi.com/api/colors`;

  fetch(api).then(res => res.json()).then((col) => {
    console.log('little1')
    let colorArr = col.colors
    colorArr.map(color => {
// console.log( col)
      if (cc === null) {
        
          if (color.group.toLowerCase() === local_shade_val.toLowerCase()) {
            little(color)
          
        }
      } else {
        // console.log(cc)
        if (color.group.toLowerCase() === cc) {
          little(color)
        }
      }
    }

    )

  })
}

window.onload = () => {
  fetchApi()
}



colorCont.addEventListener('click', (e) => {

  classfind(e)
})
function classfind(e) {
  console.log('megha')
  if (e.target.classList[0] === 'cp') {
    let cl = e.target.parentElement.parentElement.children[0].children[0]
    
    let text = cl.innerText

    navigator.clipboard.writeText(text.slice(0, 7))
    cl.style.opacity = 1
    setTimeout(() => {
      cl.style.opacity = 0
    }, 500)

  }
}

//color search
let color_Arr = []
function colorShades() {
  let api = `https://www.csscolorsapi.com/api/colors`;
  fetch(api).then(res => res.json()).then(data => {

    let colorArr = data.colors
    colorArr.map(val => {
      let colorVal = val.name.toLowerCase()
      color_Arr.push(colorVal)
    }
    )
   let color_value_Arr =  color_Arr.filter(val => val.toLowerCase().startsWith(searchInput.value.toLowerCase()))
    
    colorCont.innerHTML = ""
    let colorFilterArr = color_value_Arr.filter((val, index, self) => {
      return self.indexOf(val) === index;
    })
    // console.log(colorFilterArr)
    if(colorFilterArr.length == 0){
      // colorCont.style.display = 'flex'
      colorCont.innerHTML = `<p class="absolute text-bold uppercase text-xl text-center text-red-500">No color found</p>`
    }
      colorFilterArr.map(color_val => {
      let colorBox = document.createElement('div')
      colorBox.classList.add('color-box')
      colorBox.innerHTML = `
          <div class="color w-[100%] h-[75%] bg-[${color_val}] flex justify-center items-center">
       <p class="bg-white px-[1.6vw] py-[2vh] text-[1.7vw] rounded opacity-[0]">copied!</p>
          </div>
          <div class="color-name-or-cp flex justify-between items-center px-1 mt-[5px2vh] h-[25%] ">
            <p class="name text-[2vw] text-black">${color_val}</p>
            <div class="cp h-[100%] w-[5vw] p-[0.5px] flex justify-center items-center">
             <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 115.77 122.88" style="enable-background:new 0 0 115.77 122.88" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0"  d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"/></g></svg>
            </div>
          `
     
        colorCont.appendChild(colorBox)

    })
  })
}

let searchInput = document.querySelector('#colorSearchInput')

searchInput.oninput = () => {
   headTag.remove()
  if(searchInput.value.length == 0){
    headTag.remove()
  }
    if(searchInput.value.length < 0){
      colorCont.innerHTML = ""
    }
    let searchVal = searchInput.value
    colorShades()
   

}

