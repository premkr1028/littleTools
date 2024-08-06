let colorCont = document.querySelector('.color-cont')
let colorCont_box = document.querySelector('.color-cont .box')
let colorName = document.querySelector('.color-name-or-cp .name')
let num = 9;
let shadeArr = []
let shadeFilterArr = []
let colorArr = []
function fetchApi() {
  // console.log('megha')
  let api = `https://www.csscolorsapi.com/api/colors`;

  fetch(api).then(res => res.json()).then((col) => {
    // console.log('little1')
    let colorArr = col.colors
    

    colorArr.map((color, i) => {
      shadeArr.push(color.group)
 
      shadeFilterArr = shadeArr.filter((val, index, self) => {
        return self.indexOf(val) === index;
      })

      if (i < num) {
        let colorBox = document.createElement('div')
        colorBox.classList.add('color-box')
        // colorBox.innerHTML = '';
        colorBox.innerHTML = `
        <div class="color w-[full] h-[75%] bg-[${color.name}] flex justify-center items-center">
        <p class="bg-white px-[1.6vw] py-[5px] text-[1.7vw] rounded opacity-[0]">#${color.hex} copied!</p>
        </div>
        <div class="color-name-or-cp flex justify-between items-center px-1  h-[25%] ">
          <p class="name text-[2vw] text-black">${color.name}</p>
          <div class="cp h-[100%] w-[5vw] p-[0.5px] flex justify-center items-center">
           <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
           xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 115.77 122.88" style="enable-background:new 0 0 115.77 122.88" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0"  d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"/></g></svg>
          </div>
        `
        // console.log(color.name)
        // 
        colorCont.appendChild(colorBox)

      } else {

        return
      }

    })
    // console.log(shadeFilterArr)
  })
}
fetchApi()

colorCont.addEventListener('click', (e) => {

  classfind(e)
  console.log(e.target.classList)


})
function classfind(e) {
  if (e.target.classList[0] === 'cp') {
    // alert('megh')
    let cl = e.target.parentElement.parentElement.children[0].children[0]
    let text = cl.innerText

    navigator.clipboard.writeText(text.slice(0, 7))
    cl.style.opacity = 1
    setTimeout(() => {
      cl.style.opacity = 0
    }, 500)

  }
}

let colorSearchInput = document.querySelector('#colorSearchInput')
let search_List = document.querySelector('.shadeSearch .searchList')


colorSearchInput.addEventListener("input", () => {
  if (colorSearchInput == "") {
    search_List.style.display = 'none'
  } else {
    search_List.style.display = 'flex'
  }
})


colorSearchInput.oninput = () => {
let val = colorSearchInput.value.toLowerCase()
  let filterdList = shadeFilterArr.filter(shade => shade.toLowerCase().startsWith(val))
  // console.log(filterdList)

  search_List.innerHTML = ''
  let clutter = '';
  filterdList.map(shadeName => clutter += `
    <a href="./shades.html" class="atagSearch w-full h-full">
    <div class="listItems w-[100%] flex items-center relative ">
       <img src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png" class="listSrc w-[14px] absolute left-1" />
       <p id="searched_shade_name" class="ml-[8vw]">${shadeName}</p>
       <img class="w-[14px] absolute right-2" src="https://cdn2.iconfinder.com/data/icons/media-42/24/search_arrow-512.png" alt="">
     </div>
    <a/>
      `)
  
  search_List.innerHTML += clutter
  if(filterdList.length == 0){
    search_List.innerHTML = '<p class="sm:text-[2vw] text-[15px]">No results found</p>'
  }
  if (colorSearchInput.value === '') {
    search_List.style.display = 'none'
  }
}

search_List.addEventListener('click', () => {
  let listVal = search_List.children[0].children[0].children[1].innerText
  console.log(listVal)
  localStorage.setItem('search_List_val', listVal)
let localItme =   localStorage.getItem('shadeName')
  // co
localStorage.removeItem('shadeName' ,localItme )
})

let moreShadesBtn = document.querySelector('#moreShadesBtn')
moreShadesBtn.addEventListener('click', () => {
  num += 6;
  colorCont.innerHTML = '';
  fetchApi()
})


let srcBtn = document.querySelector('.src')

srcBtn.addEventListener('click', () => {
  if (colorSearchInput.value !== "") {
    localStorage.setItem('shadeName', colorSearchInput.value.toLowerCase())
    window.location.href = './shades.html'
  }
})