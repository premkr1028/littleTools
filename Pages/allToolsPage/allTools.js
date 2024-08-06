let searchTools = document.querySelector('#searchTools')
let filterTools = document.querySelector('#filterTools')
let allToolsDiv = document.querySelector('.allTools')
import tools from './toolsObj.js'

function addToolsOnLoad() {
  tools.map((toolObject, index) => {
    let toolDiv = document.createElement('div')
    toolDiv.classList.add('toolDiv')
    if (ids.includes(`${index}`)) {
      toolDiv.innerHTML =
        `
    
  <div class="img w-full h-[85%]">
    <img id="${toolObject.path}" class="w-full h-full object-cover" src="${toolObject.img}" alt="qr">

  </div>
  <div class="stats flex justify-between w-full px-[0.2vh]  h-[15%] ">
  <p class="name text-[1.6vw] font-normal text-nowrap">${toolObject.name}</p>
  <div class="views text-[2vw]  flex justify-center items-center">
  <details>
   <summary class="flex justify-center items-center">
    <i class="fa-solid fa-ellipsis-vertical"></i>
    </summary>
    <ul>
  <li id="${index}" class="addToFav flex items-center  justify-center">
  <i class="pointer-events-none	 fa-regular fa-trash-can"></i>
  <span class="pointer-events-none	">Remove from favs</span>
  </li>
    </ul>
    </details>
  </div>
  </div>
`
    }
    else {
      toolDiv.innerHTML = `
    
    <div class="img w-full h-[85%]">
          <img id="${toolObject.path}" class="w-full h-full object-cover" src="${toolObject.img}" alt="qr">

    </div>
    <div class="stats flex justify-between w-full px-[0.2vh]  h-[15%] ">
      <p class="name text-[1.6vw] font-normal text-nowrap">${toolObject.name}</p>
      <div class="views text-[2vw]  flex justify-center items-center">
      <details>
         <summary class="flex justify-center items-center">
          <i class="fa-solid fa-ellipsis-vertical"></i>
          </summary>
          <ul>
      <li id="${index}" class="addToFav flex items-center  justify-center">
      <i class="pointer-events-none	 fa-regular fa-heart"></i>
      <span class="pointer-events-none	">Add to favourites</span>
      </li>
          </ul>
          </details>
      </div>
    </div>
    
    
    `}
    allToolsDiv.append(toolDiv)

  }

  )
  let addTo = document.querySelectorAll('.addToFav')
  console.log(addTo)
  addAndRemoveFromFavFunc(addTo)

}
let ids = []
let getPlocal = localStorage.getItem('pTag')
if (getPlocal) {
  let transPtag = JSON.parse(getPlocal)
  transPtag.map((tool, index) => {
    ids.push(tool.id)
    console.log(ids)
  })
}
window.onload = () => {
  addToolsOnLoad()
}

searchTools.oninput = () => {
  if (searchTools.value !== '') {
    allToolsDiv.innerHTML = ''
    let searchedTools = tools.filter(tool => {
      return tool.name.toLowerCase().startsWith(searchTools.value)
    })
    searchedTools.map((toolObject , index) => {
      let toolDiv = document.createElement('div')
      toolDiv.classList.add('toolDiv')
      toolDiv.innerHTML = `
     
   <div class="img w-full h-[85%]">
     <img id="${toolObject.path}" class="w-full h-full object-cover" src="${toolObject.img}" alt="qr">

   </div>
   <div class="stats flex justify-between w-full px-[0.2vh]  h-[15%] ">
   <p class="name text-[1.6vw] font-normal text-nowrap">${toolObject.name}</p>
   <div class="views text-[2vw]  flex justify-center items-center">
   <details>
    <summary class="flex justify-center items-center">
     <i class="fa-solid fa-ellipsis-vertical"></i>
     </summary>
     <ul>
   <li id="${index}" class="addToFav flex items-center  justify-center">
   <i class="pointer-events-none	 fa-regular fa-heart"></i>
   <span class="pointer-events-none	">Add to favourites</span>
   </li>
     </ul>
     </details>
   </div>
   </div>

      
    `
      allToolsDiv.append(toolDiv)
    })
  } else {
    allToolsDiv.innerHTML = ''
    addToolsOnLoad()
  }
}


filterTools.onchange = (e) => {
  filterTheTools(e)
}
function filterTheTools(e) {
  allToolsDiv.innerHTML = ''
  let choosenFilter = e.target.value;
  if (choosenFilter == 'all') {
    addToolsOnLoad()
  } else {
    tools.filter(toolObj => {
      toolObj.category.map((cat , index) => {
        if (cat === choosenFilter) {
          let toolDiv = document.createElement('div')
          toolDiv.classList.add('toolDiv')
          console.log(toolObj.path)
          toolDiv.innerHTML = `
         
           <div class="img w-full h-[85%]">
             <img class="w-full h-full object-cover" src="${toolObj.img}" alt="qr">

           </div>
           <div class="stats flex justify-between w-full px-[1vh]  h-[15%] ">
             <p class="name text-[1.6vw] font-normal text-nowrap">${toolObj.name}</p>
             <div class="views text-[1.6vw]">
             <details>
                <summary class="flex justify-center items-center">
                 <i class="fa-solid fa-ellipsis-vertical"></i>
                 </summary>
                 <ul>
               <li id="${index}" class="addToFav flex items-center  justify-center">
               <i class="pointer-events-none	 fa-regular fa-heart"></i>
               <span class="pointer-events-none	">Add to favourites</span>
               </li>
                 </ul>
                 </details>
             </div>
           </div>
          
         `
          allToolsDiv.append(toolDiv)
        }
      })
    })
  }

}

allToolsDiv.addEventListener('click', (e) => {
  // console.log(e.target)
  if (e.target.tagName == 'IMG') {
    let a = document.createElement('a')
    a.href = '/' + e.target.id
    a.click()
    console.log(e.target.id)
  }
  if (e.target.classList.contains('addToFavToolsBtn')) {
    addAndRemoveToFavs(e)
  }
})
let pTag = 'Add to favourites'
// let delAndAddArr = []
let allToolsFavToolsArr = []
function addAndRemoveFromFavFunc(adds) {
  adds.forEach((btn, ind) => {
    btn.onclick = (e) => {
      pTag = e.target.children[1].innerText
      console.log(pTag)
      if (pTag === 'Add to favourites') {
        pTag = 'Remove from favs'
        let getPtag = localStorage.getItem('pTag')


        // if(getPtag) 
        // console.log(typeof getPtag)
        let parsedPtag = JSON.parse(getPtag)
        if (!getPtag) { parsedPtag = [] }
        parsedPtag.push({
          id: e.target.id,
          statt: pTag

        })

        localStorage.setItem('pTag', JSON.stringify(parsedPtag))

        btn.innerHTML = `
    <i class="fa-regular pointer-events-none  fa-trash-can"></i>
    <span class="pointer-events-none">${pTag}</span>
      `

      } else {
        pTag = 'Add to favourites'
        let getPtagFormLocal = JSON.parse(localStorage.getItem('pTag'))
        let newParr = getPtagFormLocal.filter(tool => tool.id != e.target.id)
        console.log('meghaLittle')
        localStorage.setItem('pTag', JSON.stringify(newParr))
        btn.innerHTML = `
    <i class="fa-regular pointer-events-none  fa-heart"></i>
    <span class="pointer-events-none">Add to favourites</span>
      `
      }
      let name = e.target.parentElement.parentElement.parentElement.parentElement.children[0].innerText

      let imgSrc = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[0].src;
      let path = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[0].id;
      const favToolsObj = {
        name: name,
        path: '/' + path,
        img: imgSrc,
        id: ind
      }
      let favToolsArr = JSON.parse(localStorage.getItem('favTools'))
      if (!favToolsArr) {
        favToolsArr = []
      }
      favToolsArr.push(favToolsObj)
      let list = []

      if (pTag === 'Add to favourites') {
        if (favToolsArr != []) {
          let newFilArr = favToolsArr.filter(tool => tool.id !== favToolsObj.id)

          favToolsArr = [...newFilArr]

        }
      }
      console.log('delFavs')
      console.log(favToolsArr)
      favToolsArr.map(elem => {
        let objStr = JSON.stringify(elem)
        list.push(objStr)
      })

      let unique = [];
      function removeDuplicates(arr) {
        arr.map(element => {
          if (!unique.includes(element)) {
            unique.push(JSON.parse(element));
          }
          return true;
        });
        return unique;
      }

      removeDuplicates(list)
      let uu = []
      unique.map(elem => {
        let objStr = JSON.stringify(elem)
        if (!uu.includes(objStr)) {
          uu.push(objStr)
        }
      })
      let nuu = []
      uu.map(u => {

        nuu.push(JSON.parse(u))
      })
      localStorage.setItem('favTools', JSON.stringify(nuu))

    }
  })
}

