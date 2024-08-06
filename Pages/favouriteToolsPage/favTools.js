// let list = []
let favToolsCont = document.querySelector('.favToolsCont')
let getLocal = localStorage.getItem('favTools')




// console.log(getLocal.length)
if(getLocal){
    getLocal = JSON.parse(getLocal)
}

// getLocal.map(elem =>{
//     let objStr = JSON.stringify(elem)
//     list.push(objStr)
// })

//     let unique = [];
// function removeDuplicates(arr) {
//     arr.every(element => {
//         if (!unique.includes(element)) {
//             unique.push(element);
//         }
//         return true; 
//     });
//     return unique;
// }

// removeDuplicates(list)


// let uniqToolObjArr = []
// unique.map(uni =>{
//     // console.log(uni)
    
//     uniqToolObjArr.push(JSON.parse(uni))
// })

// console.log(uniqToolObjArr)
// getLocal = [...uniqToolObjArr]
function applyQuete(){
    favToolsCont.style.display = 'flex'
    favToolsCont.style.flexDirection = 'column'
    favToolsCont.innerHTML = `
    <p id="notFavToolAddText" class="w-full text-2xl font-semibold text-center">"You did not add any favourite tools yet!"</p>


    `

}
if(!getLocal || getLocal.length == 0 ){
  applyQuete()
}
// console.log(typeof getLocal)
if(getLocal){
    
        getLocal.map(tool =>{
        let toolDiv = document.createElement('div')
        toolDiv.classList.add('toolDiv')
        toolDiv.innerHTML = `
        <div class="tool flex flex-col items-center gap-1">
              <div class="img w-full h-[70%] " >
                <img id="${tool.path}" class="w-full h-full object-cover" src="${tool.img}" alt="qr">

              </div>
              <div class="stats flex justify-between w-full px-[1vh]  h-[40%] ">
                <p class="name text-[2vw] w-[70%]  font-normal text-nowrap">${tool.name}</p>
                <div class=" views text-[2vw]">
                <details>
               <summary>
                <i class="fa-solid fa-ellipsis-vertical"></i>
                </summary>
                <ul class="addBtnUl">
        <li id="${tool.id}"  class="addToFavToolsBtn flex items-center removeFromFavToolsBtn justify-center">
        <i class="fa-regular pointer-events-none  fa-trash-can"></i>
        Remove from favs
        </li>
                </ul>
                </details>
                </div>
              </div>
            </div> 
        `
            favToolsCont.appendChild(toolDiv)
    })
}





favToolsCont.addEventListener('click', (e) => {
    // console.log(e.target)
    if (e.target.tagName == 'IMG') {
        let a = document.createElement('a')
        a.href = e.target.id
        a.click()
    }
})

let removeToolsBtn = document.querySelectorAll('.removeFromFavToolsBtn')
function removePopUp(){
    let popDivKaDiv = document.createElement('div')
    popDivKaDiv.style.position = 'fixed'
    popDivKaDiv.style.backgroundColor = 'red'
 let bcColor = 'red'
    
    popDivKaDiv.innerHTML = `
    <div class="popUpForAdd fixed bg-${bcColor}-400  border border-gray-400 rounded-md font-semibold z-[20] top-[20vh] left-[2vw] p-2 text-center text-black overflow-hidden flex flex-col">
     Remove from favourites tools!
      <div class="prBar"></div>
    </div>
    `
    document.querySelector('.container').append(popDivKaDiv)

    let popOpForAdd = document.querySelector('.popUpForAdd')
           setTimeout(()=>{
                   popOpForAdd.style.transform = 'translateX(0)'
               setTimeout(() => {

                               popOpForAdd.classList.add('ppAnimation')
                   setTimeout(() => {

                               popDivKaDiv.classList.remove('ppAnimation')
                   }, 200)
               }, 200)
           },50)

     setTimeout(() => {
                popOpForAdd.classList.add('ppAnimation')
            document.querySelector('.prBar').classList.remove('popLne')
                    popOpForAdd.style.transform = 'translateX(-120%)'
         setTimeout(()=>{
             popDivKaDiv.remove()
         },1060)
        }, 1050)
  
}
removeToolsBtn.forEach(btn => {
   
    btn.onclick = (e)=>{
removePtagfromLocal(e)
        removePopUp(btn)
        let toool = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement 
        toool.remove()
       
     
        let changeArr = []
        
         getLocal.map((toolu , index) =>{
                if(toolu.id != e.target.id){
                    changeArr.push(toolu)
                }
           
           })    
     
// let setChangeArrToLocalWalaArr = []
    getLocal = [...changeArr]
        console.log(changeArr.length , changeArr)
 
      localStorage.setItem('favTools' , JSON.stringify(getLocal))
        if(getLocal.length == 0){
               applyQuete()
           }
    }
})

function removePtagfromLocal(e){
let localPtag = localStorage.getItem('pTag')
    let localPtagArr =  JSON.parse(localPtag)
let changedPtagArr = localPtagArr.filter(tools =>
  tools.id != e.target.id
)
    console.log(changedPtagArr)
    localStorage.setItem('pTag', JSON.stringify(changedPtagArr))
}