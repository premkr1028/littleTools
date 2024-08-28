//smoth scroll function

const lenis = new Lenis()
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

//real js start
let page1 = document.querySelector('.page1')
let nav = document.querySelector('nav')
let menuLayBAckGround = document.querySelector('.menuLay')
let menuBtn = document.querySelector('.menuBtn')
let closeMenuBtn = document.querySelector('.closeMenu')
let menubarNavBtn = document.querySelector('.menubarNav')
let searchFixBtn = document.querySelectorAll('.searchFixBtn')
let navHideTl = gsap.timeline({
    scrollTrigger: {
        trigger: page1,
        start: "10% 6%",
        end: "15% 12%",
        markers: false,
        scrub: 1,
    }
})
navHideTl.to(nav, {
    transform: 'translateY(-100%)',
})
navHideTl.to(menuBtn, {
    right: '15vw',
    opacity: 1,
}, 'a')
searchFixBtn.forEach(btn => {
    navHideTl.to(btn, {
        right: '4vw',
        opacity: 1,
    }, 'a')
})

let searchFixBtnIco = document.querySelector('.searchFixBtnIco')
let menuBtnChange = false
searchFixBtnIco.onclick = () => {
    searchAaja()
 
}
let toolsDiv = document.querySelector('.toolsDiv')

let tools = [
    {
        name: 'QR generator',
        likes: 0,
        views: 0,
        img: 'https://qrcodedynamic.com/themes/altum/assets/images/qr_code.svg',
        path: 'ToolsFolder/qrgenerator.html',
        id: 1
    }, {
        name: 'Img to pdf converter',
        likes: 0,
        views: 0,
        img: 'https://www.adobe.com/dc-shared/assets/images/frictionless/og-images/media_143f13bb012ce979a51e1b4bb370c0620964666ce.jpeg',
        path: 'ToolsFolder/imgtopdf.html',
        id: 2
    }, {
        name: 'Yt thumbnail Down',
        likes: 0,
        views: 0,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAj4_bJnqM046vfn4p9AsD79Hgy3mDlzCzTA&s',
        path: 'ToolsFolder/ytthumbnailDown.html',
        id: 3
    }, {
        name: 'Image BG remover',
        likes: 0,
        views: 0,
        img: 'https://cdnp.kittl.com/c3f43b9b-2e98-492e-bce3-12745fffdbb8_Kittl-AI_Background-remover.jpg?auto=compress,format',
        path: 'ToolsFolder/removebg.html'
    }, {
        name: 'Url shortner',
        likes: 0,
        views: 0,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwb0eIjBK204W-deEfs6FtVwyMkRpTcVVUA&s',
        path: 'ToolsFolder/urlshortner.html'
    }, {
        name: 'Resume Maker',
        likes: 0,
        views: 0,
        img: 'https://play-lh.googleusercontent.com/k9f5461ozVZlakd3tLpw8XI2R4XvD3jrOBQl6H43XKUjTlGF50NBjEJhA7B1z3YoxA',
        path: 'ToolsFolder/resumeMake.html'
    }, {
        name: 'Youtube Tags Extractor',
        likes: 0,
        views: 0,
        img: 'https://hipsocial.com/images/blog/youtube-tags.png?v=1685444361603999222',
        path: 'ToolsFolder/youtubetagsget.html'
    }, {
        name: 'Random password generator',
        likes: 0,
        views: 0,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9CsH17mL6pz_6OgKkLxMU93VwAs80vZkDlQ&usqp=CAU',
        path: 'ToolsFolder/passwordgen.html'
    }, {
        name: 'Word & Char counter',
        likes: 0,
        views: 0,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMy83LK56KUPrv_waTh6kj_cmqAn4HrbRwUvu64F4Z0tlC9XSzI0Gz9s&s=10',
        path: 'ToolsFolder/wordcounter.html'
    }, {
        name: 'CSS shades',
        likes: 0,
        views: 0,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Q5uPuhDeYcSvmjoR1ydTz7Vo07bD-vG0Dw&s',
        path: 'ToolsFolder/cssshade.html'
    }, {
        name: 'Canvas Whiteboard',
        likes: 0,
        views: 0,
        img: 'https://vibe.us/img/smartboard-55/canvas/brush-mode_huaac5e4490be11338f4bc05b9bd00e48d_194591_1680x0_resize_q90_h2_lanczos_3.9f73fbd4c0f7d2de5e58b8c9cb742ce0397b20316eeabdb9ed3ce77da35a3f6c.webp',
        path: 'ToolsFolder/whiteboard.html'
    }, {
        name: 'Text to TXT file convertor',
        likes: 0,
        views: 0,
        img: 'https://www.vertopal.com/static/ui/image/converter/convert-text-to-txt.webp',
        path: 'ToolsFolder/texttofile.html'
    }, {
        name: 'Dictionary online',
        likes: 0,
        views: 0,
        img: 'https://res.cloudinary.com/dav7ooy4z/image/upload/v1516059963/dictionary_xgotgr.png',
        path: 'ToolsFolder/dictionary.html'
    }, {
        name: 'Pixel Art Make',
        likes: 0,
        views: 0,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7EhP3bYd5alns2K04Lzyt-n6YDxy_pLKHOA&s',
        path: 'ToolsFolder/pixelartmaker.html'
    }, {
        name: 'Percentage Calculator',
        likes: 0,
        views: 0,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtDtgme0AteG-4sc83qx-a8hVFCAMLyHh4Sg&s',
        path: 'ToolsFolder/percentagecalculator.html'
    }, {
        name: 'Border shadow CSS <br>generator',
        likes: 0,
        views: 0,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaPh8Mk-_b_cB1hbhGbzLAEVOrVhU62uJyEl1edummwspDIIziS-YztWo&s=10',
        path: 'ToolsFolder/bordershadowgen.html'
    }, {
        name: 'Blob generator CSS',
        likes: 0,
        views: 0,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCtgk5X5Q9nW0rrfuybR2Fm7W7vxRbxz6KxJbd0PHyeKdxitj1PjhOacY&s=10',
        path: 'ToolsFolder/blobgen.html'
    }, {
        name: 'BMI Calculator',
        likes: 0,
        views: 0,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzfOJC24T27C6iJI00EsRggqGoTlrXv07WPg&s',
        path: 'ToolsFolder/bmiCalculator.html'
    },

]
let toolsArr = []
let pTag = 'Add to favourites'
// loadPtag()
let ids = []
let getPlocal = localStorage.getItem('pTag')
if (getPlocal) {
    let transPtag = JSON.parse(getPlocal)
    transPtag.map((tool, index) => {
        ids.push(tool.id)
    })
    if (transPtag.length > 0) { pTag = transPtag[0].statt }

}
tools.map((too, index) => {

    if (index < 9) {
        // console.log(ids.includes('0'))
        let tool = document.createElement('div')
        tool.classList.add('tool')
        if (ids.includes(`${index}`)) {
            console.log('lil')
            tool.innerHTML = `

                   <div class="tool flex flex-col items-center gap-1">
                       <div class="img w-full h-[80%]" >
                         <img id="/${too.path}" class="w-full h-full object-cover" src="${too.img}" alt="qr">

                       </div>
                       <div class="stats flex justify-between w-full px-[1vh]  h-[40%] ">
                         <p class="name text-[2vw] font-normal text-nowrap">${too.name}</p>
                         <div class="views text-[2vw]">
                         <details>
                        <summary>
                         <i class="fa-solid fa-ellipsis-vertical"></i>
                         </summary>
                         <ul>
         <li id=${index} class="flex items-center addToFavToolsBtn justify-center">
         <i class="fa-regular pointer-events-none  fa-trash-can"></i>
         <span class="pointer-events-none">${pTag}</span>
         </li>

                         </ul>
                         </details>
                         </div>
                       </div>
                     </div> 
                  `
        }
        else {
            tool.innerHTML = `
          
          <div class="toolu h-[100%] w-[100%] flex flex-col items-center gap-1">
              <div class="img w-full h-[80%] " >
                <img id="/${too.path}" class="w-full h-full object-cover" src="${too.img}" alt="qr">

              </div>
              <div class="stats flex justify-between w-full px-[1vh]  h-[20%] ">
                <p class="name text-[2vw] font-normal text-nowrap">${too.name}</p>
                <div class="views text-[2vw]">
                <details class="">
               <summary>
                <i class="fa-solid fa-ellipsis-vertical"></i>
                </summary>
                <ul class="addBtnUl">
<li id=${index} class="flex items-center addToFavToolsBtn justify-center">
<i class="fa-regular pointer-events-none  fa-heart"></i>
<span class="pointer-events-none">Add to favourites</span>
</li>

                </ul>
                </details>
                </div>
              </div>
            </div> 
         `}
        toolsDiv.appendChild(tool)
    }
    toolsArr.push({
        name: too.name,
        path: too.path
    })

})

// console.log(toolsArr.length)
//searchBar ka kaam
let searchMeJaa = document.querySelector('.searchMeJaa')
let searchOpen = false
let searchBar = document.querySelector('.searchBar')
let searchBacklay = document.querySelector('.searchBacklay')
let searchIconDiv = document.querySelector('.searchIconDiv')
function searchAaja() {
     
    if (!menuBtnChange) {

        menuBtnChange = true
        searchBar.focus()
        searchFixBtnIco.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    } else if (menuBtnChange) {
        menuBtnChange = false
        searchFixBtnIco.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`
    }
    console.log('megha')
    searchOpen = !searchOpen
    if (searchOpen === true) {
 searchBar.value = ""
     searchIconDiv.innerHTML = `
       <img class="w-[100%]" src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"/>
       `
        searchMeJaa.style.display = 'flex'
        searchBacklay.style.display = 'block'
        searchFixBtn.innerHTML = 'close'
        searchBar.style.transform = 'translateX(-50%) scale(1)';
    } else {
        searchIconDiv.innerHTML = `
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" viewBox="0 0 50 50">
         <path
           d="M 21 3 C 11.654545 3 4 10.654545 4 20 C 4 29.345455 11.654545 37 21 37 C 24.701287 37 28.127393 35.786719 30.927734 33.755859 L 44.085938 46.914062 L 46.914062 44.085938 L 33.875 31.046875 C 36.43682 28.068316 38 24.210207 38 20 C 38 10.654545 30.345455 3 21 3 z M 21 5 C 29.254545 5 36 11.745455 36 20 C 36 28.254545 29.254545 35 21 35 C 12.745455 35 6 28.254545 6 20 C 6 11.745455 12.745455 5 21 5 z">
         </path>
       </svg>
       `
        searchBar.input = "";
        searchBacklay.style.display = 'none'
        searchMeJaa.style.display = 'none'
        searchList.style.top = 15 + 'vh'
searchList.style.display= "none"
    searchFixBtn.innerHTML = 'search tools'
        searchBar.style.transform = ' scale(0)';
    }


}
let searchList = document.querySelector('.searchList');

function searchListAaja() {

    searchList.style.display = 'flex'
    setTimeout(() => {
        searchList.style.top = 'calc(15vh + 40px)'
    }, 200)
}
function searchChalaJa() {
   if(searchBar.value == ''){
       searchList.style.top = 15 + 'vh'

       setTimeout(() => {
           searchList.style.display = 'none'
           // searchList.style.height = 0
       }, 200)
   }


}
function searchHist() {
    let filterdList = toolsArr.filter(tool => tool.name.toLowerCase().startsWith(searchBar.value.toLowerCase()))
    console.log(filterdList)

    searchList.innerHTML = ''
    let clutter = '';
    filterdList.map(toolsName => {
        clutter = `<div class="px-[2vw] py-[2vh] w-full relative flex gap-2 items-center searchListTools">
             <div class="w-[18px]   grid place-items-center">
                 <svg class="serIcon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80%" viewBox="0 0 50 50">
                       <path
                         d="M 21 3 C 11.654545 3 4 10.654545 4 20 C 4 29.345455 11.654545 37 21 37 C 24.701287 37 28.127393 35.786719 30.927734 33.755859 L 44.085938 46.914062 L 46.914062 44.085938 L 33.875 31.046875 C 36.43682 28.068316 38 24.210207 38 20 C 38 10.654545 30.345455 3 21 3 z M 21 5 C 29.254545 5 36 11.745455 36 20 C 36 28.254545 29.254545 35 21 35 C 12.745455 35 6 28.254545 6 20 C 6 11.745455 12.745455 5 21 5 z">
                       </path>
                     </svg><img class="listScIcon" />
                </div> 
             <a class="searchText text-[2vw] w-full"
             href="${toolsName.path}">${toolsName.name}</a>
            </div>`
        searchList.innerHTML += clutter

    }
    )

    if (searchBar.value === '') {
        searchList.innerHTML = ''
    }
}

document.querySelector('.searchFixBtn').onclick = () => {
    searchAaja()
}
searchIconDiv.onclick = () => {
    searchAaja()

}
searchBar.oninput = () => {
    searchHist()
}
searchBar.onfocus = () => {
    searchListAaja()
}

toolsDiv.addEventListener('click', (e) => {
    if (e.target.tagName == 'IMG') {
        let a = document.createElement('a')
        a.href = e.target.id
        a.click()
    }
})
let delAndAddArr = []
// let stats = false
let statsTask = 'Add to favourites'
function popUpForAddTostFunc(st) {
    let popDivKaDiv = document.createElement('div')
    popDivKaDiv.style.position = 'fixed'
    popDivKaDiv.style.backgroundColor = 'red'
    let bcColor = ''
    if (stats) {
        bcColor = 'red'
    }
    if (!stats) {
        bcColor = 'green'
    }

    popDivKaDiv.innerHTML =
        document.querySelector('.container').append(popDivKaDiv)

    let popOpForAdd = document.querySelector('.popUpForAdd')
    setTimeout(() => {
        popOpForAdd.style.transform = 'translateX(0)'
        setTimeout(() => {

            popOpForAdd.classList.add('ppAnimation')
            setTimeout(() => {

                popDivKaDiv.classList.remove('ppAnimation')
            }, 200)
        }, 200)
    }, 50)

    setTimeout(() => {
        popOpForAdd.classList.add('ppAnimation')
        document.querySelector('.prBar').classList.remove('popLne')
        popOpForAdd.style.transform = 'translateX(-120%)'
        setTimeout(() => {
            popDivKaDiv.remove()
        }, 1060)
    }, 1050)
    stats = !stats
}

let addToFavToolsBtn = document.querySelectorAll('.addToFavToolsBtn')
let favToolsArr = []
addToFavToolsBtn.forEach((btn, ind) => {
    btn.onclick = (e) => {
        pTag = e.target.children[1].innerText
        console.log(pTag)
        if (pTag === 'Add to favourites') {
            pTag = 'Remove from favs'
            delAndAddArr.push({
                id: e.target.id,
                statt: pTag
            })
            localStorage.setItem('pTag', JSON.stringify(delAndAddArr))

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

        let imgSrc = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[0].children[0].src
        let path = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[0].id
        const favToolsObj = {
            name: name,
            path: path,
            img: imgSrc,
            id: ind
        }

        favToolsArr.push(favToolsObj)
        console.log(favToolsArr)

        let list = []
        if (pTag === 'Add to favourites') {
            popUpdivKoBanana(e, favToolsObj)
        }

        favToolsArr.map(elem => {
            let objStr = JSON.stringify(elem)
            list.push(objStr)
        })

        let unique = [];
        function removeDuplicates(arr) {
            arr.every(element => {
                if (!unique.includes(element)) {
                    unique.push(element);
                }
                return true;
            });
            return unique;
        }

        removeDuplicates(list)


        let uniqToolObjArr = []
        unique.map(uni => {
            uniqToolObjArr.push(JSON.parse(uni))
        })


        localStorage.setItem('favTools', JSON.stringify(uniqToolObjArr))

        console.log(uniqToolObjArr)
    }
})


let getToolArrFromLocal = localStorage.getItem('favTools')
if (getToolArrFromLocal) {
    getToolArrFromLocal = JSON.parse(getToolArrFromLocal)
}

if(getToolArrFromLocal)
{favToolsArr = [...getToolArrFromLocal]}



function popUpdivKoBanana(e, obj) {

    if (favToolsArr != []) {
        let newFilArr = favToolsArr.filter(tool => tool.id !== obj.id)

        favToolsArr = [...newFilArr]
        console.log(favToolsArr)
    } else {
        console.log('favToolsArr is empty')
    }
    e.target.setAttribute('id', null)
}

function loadPtag() {
    let localPtag = localStorage.getItem('pTag')

    if (localPtag) {
        pTag = localPtag
    }
}

function disableScroll() {
    document.body.classList.
        add("stop-scrolling");
}

function enableScroll() {
    document.body.classList
        .remove("stop-scrolling");
}



menubarNavBtn.addEventListener('click', menuLayAa)
function menuLayAa() {
    menuLayBAckGround.style.display = 'flex'
    let menuTime = gsap.timeline()
    menuTime.to(menuLayBAckGround, {
        width: '100vw',
        duration: 0.5,

    })
    menuTime.to('.menuLay span a', {
        top: 0,
        duration: 0.5
    }, 'w')
    menuTime.to('.menuLay ul li', {
        top: 0,
        duration: 0.5
    }, 'w')
    menuTime.to('.menuLay .closeMenu h1', {
        opacity: 1,
        duration: 0.5
    }, 'w')
}

closeMenuBtn.addEventListener('click', () => {
    console.log('ll')
    menuGaya()
})

function menuGaya() {
    console.log('megha')

    let menuTime = gsap.timeline()

    menuTime.to('.menuLay span a', {
        top: 100,
        duration: 0.1
    }, 'w')
    menuTime.to('.menuLay ul li', {
        top: 100,
        duration: 0.1
    }, 'w')
    menuTime.to('.menuLay .closeMenu h1', {
        opacity: 0,
        duration: 0.1
    }, 'w')
    menuTime.to(menuLayBAckGround, {
        width: '0vw',
        duration: 0.5,
    })
    setTimeout(() => {
        menuLayBAckGround.style.display = 'none'
    }, 600)
}

function goTOBRowsw(){
    let a =  document.createElement('a')
    a.href = 'Pages/allToolsPage/allTools.html'
    a.click()
}
let feedBack = document.querySelector('.feedbak')
// feedBack.setAttribute('href' , '')
feedBack.onclick = () =>{
    openGmailCompose('premcodeprojects2810@gmail.com')
}
function openGmailCompose(email) {
  const mailtoLink = `mailto:${email}?subject=`;
  window.location.href = mailtoLink;
}