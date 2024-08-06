let search = document.querySelector('.search')

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
let menuBtn = document.querySelector('.menuBtn')
let searchFixBtn = document.querySelectorAll('.searchFixBtn')
searchFixBtn.forEach(btn =>{
    btn.onclick = ()=>{
        searchAaja()
    }
})
let searchIconDiv = document.querySelector('.search')
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
navHideTl.to(searchFixBtn, {
    right: '4vw',
    opacity: 1,
}, 'a')

// tools add
let toolsDiv = document.querySelector('.toolsDiv')
let tools = [
    {
    name: 'QR generator',
        likes: 0,
            views: 0,
        img:'https://qrcodedynamic.com/themes/altum/assets/images/qr_code.svg',
        path: 'ToolsFolder/qrgenerator.html',
      category:['daily uses']
    },  {
        name: 'Img to pdf converter',
            likes: 0,
                views: 0,
            img:'https://www.adobe.com/dc-shared/assets/images/frictionless/og-images/media_143f13bb012ce979a51e1b4bb370c0620964666ce.jpeg',
            path: 'ToolsFolder/imgtopdf.html',
        category:['daily uses', 'official']
        },{
        name: 'Yt thumbnail Down',
            likes: 0,
                views: 0,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAj4_bJnqM046vfn4p9AsD79Hgy3mDlzCzTA&s',
            path: 'ToolsFolder/ytthumbnailDown.html',
        category:['daily uses', 'entertainment','youtube']
        },{
        name: 'Image BG remover',
            likes: 0,
                views: 0,
            img:'https://cdnp.kittl.com/c3f43b9b-2e98-492e-bce3-12745fffdbb8_Kittl-AI_Background-remover.jpg?auto=compress,format',
            path: 'ToolsFolder/removebg.html',
        category:['editing']
        },{
        name: 'Url shortner',
            likes: 0,
                views: 0,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwb0eIjBK204W-deEfs6FtVwyMkRpTcVVUA&s',
            path: 'ToolsFolder/urlshortner.html',
        category:['official', 'content creator']
        },{
        name: 'Resume Maker',
            likes: 0,
                views: 0,
            img:'https://play-lh.googleusercontent.com/k9f5461ozVZlakd3tLpw8XI2R4XvD3jrOBQl6H43XKUjTlGF50NBjEJhA7B1z3YoxA',
          path: 'ToolsFolder/resumeMake.html',
        category:['official']
        },{
        name: 'Youtube Tags Extractor',
            likes: 0,
                views: 0,
            img:'https://hipsocial.com/images/blog/youtube-tags.png?v=1685444361603999222',
          path: 'ToolsFolder/youtubetagsget.html',
        category:['youtube','content creater']
        },{
        name: 'Random password generator',
            likes: 0,
                views: 0,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9CsH17mL6pz_6OgKkLxMU93VwAs80vZkDlQ&usqp=CAU',
          path: 'ToolsFolder/passwordgen.html',
        category:['daily uses']
        },{
        name: 'Word & Char counter',
            likes: 0,
                views: 0,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMy83LK56KUPrv_waTh6kj_cmqAn4HrbRwUvu64F4Z0tlC9XSzI0Gz9s&s=10',
          path: 'ToolsFolder/wordcounter.html',
        category:['study','daily uses']
        },{
        name: 'CSS shades',
            likes: 0,
                views: 0,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Q5uPuhDeYcSvmjoR1ydTz7Vo07bD-vG0Dw&s',
          path: 'ToolsFolder/cssshade.html',
        category:['for developers']
        },{
        name: 'Canvas Whiteboard',
            likes: 0,
                views: 0,
            img:'https://vibe.us/img/smartboard-55/canvas/brush-mode_huaac5e4490be11338f4bc05b9bd00e48d_194591_1680x0_resize_q90_h2_lanczos_3.9f73fbd4c0f7d2de5e58b8c9cb742ce0397b20316eeabdb9ed3ce77da35a3f6c.webp',
          path: 'ToolsFolder/whiteboard.html',
        category:['entertainment','official','daily uses']
        },{
        name: 'Text to TXT file convertor',
            likes: 0,
                views: 0,
            img:'https://www.vertopal.com/static/ui/image/converter/convert-text-to-txt.webp',
          path: 'ToolsFolder/texttofile.html',
        category:['official','daily uses']
        },{
        name: 'Dictionary online',
            likes: 0,
                views: 0,
            img:'https://res.cloudinary.com/dav7ooy4z/image/upload/v1516059963/dictionary_xgotgr.png',
          path: 'ToolsFolder/dictionary.html',
        category:['study','daily uses']
        },{
        name: 'Pixel Art Make',
            likes: 0,
                views: 0,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7EhP3bYd5alns2K04Lzyt-n6YDxy_pLKHOA&s',
          path: 'ToolsFolder/pixelartmaker.html',
        category:['entertainment']
        },{
        name: 'Percentage Calculator',
            likes: 0,
                views: 0,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtDtgme0AteG-4sc83qx-a8hVFCAMLyHh4Sg&s',
          path: 'ToolsFolder/percentagecalculator.html',
        category:['daily uses','study']
        },{
        name:'Border shadow CSS <br>generator',
            likes: 0,
                views: 0,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaPh8Mk-_b_cB1hbhGbzLAEVOrVhU62uJyEl1edummwspDIIziS-YztWo&s=10',
          path: 'ToolsFolder/bordershadowgen.html',
        category:['for developers']
        },{
        name:'Blob generator CSS',
            likes: 0,
                views: 0,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCtgk5X5Q9nW0rrfuybR2Fm7W7vxRbxz6KxJbd0PHyeKdxitj1PjhOacY&s=10',
          path: 'ToolsFolder/blobgen.html',
        category:['for developers']
        },{
        name:'BMI Calculator',
            likes: 0,
                views: 0,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzfOJC24T27C6iJI00EsRggqGoTlrXv07WPg&s',
          path: 'ToolsFolder/bmiCalculator.html',
        category:['daily uses','study']
        },

]
let toolsArr = []

tools.map((too)=>{
    let tool = document.createElement('div')
    tool.classList.add('tool')
    tool.innerHTML = `
   <a href="${too.path}">
   <div class="tool flex flex-col items-center gap-1">
       <div class="img w-full h-[70%] ">
         <img class="w-full h-full object-cover" src="${too.img}" alt="qr">"

       </div>
       <div class="stats flex justify-between w-full px-[1vh]  h-[40%] ">
         <p class="name text-[2vw] font-normal text-nowrap">${too.name}</p>
         <div class="views text-[2vw]">${too.views}</div>
       </div>
     </div> 
   </a>`
  
    toolsArr.push({
        name:too.name,
        path:too.path
    })

   // console.log(toolsArr)
})

search.addEventListener('click', searchAaja)
//searchBar ka kaam
let searchMeJaa = document.querySelector('.searchMeJaa')
let searchOpen = false
let searchBar = document.querySelector('.searchBar')
let searchBacklay = document.querySelector('.searchBacklay')
function searchAaja(){
    searchOpen = !searchOpen
   if(searchOpen === true){
       searchIconDiv.innerHTML =  `
          <img class="w-[100%]" src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"/>
          `
       searchMeJaa.style.display = 'flex'
       searchBacklay.style.display = 'block'
       searchFixBtn.innerHTML='close'
        searchBar.style.transform ='translateX(-50%) scale(1)';
   }else{
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
       searchFixBtn.innerHTML='search tools'
        searchBar.style.transform =' scale(0)';
   }


}
let searchList = document.querySelector('.searchList');
searchBar.oninput = ()=>{
        searchHist()
}
searchBar.onfocus = ()=>{
    searchListAaja()
}
searchBar.onblur = ()=>{
    searchChalaJa()
}
function searchListAaja(){
    searchList.style.display = 'flex'
    setTimeout(()=>
        {
            searchList.style.top ='calc(15vh + 40px)'
        },200)
}
function searchChalaJa(){
    setTimeout(()=>
        {
            searchList.style.display = 'none'

        },200)


}
function searchHist(){ 
 let filterdList= toolsArr.filter(tool=> tool.name.toLowerCase().startsWith(searchBar.value))
    // console.log(filterdList)

    searchList.innerHTML = ''
    let clutter = '' ;
        filterdList.map(toolsName => {
            clutter = `<div class=" w-full relative flex gap-2 items-center searchListTools">
             <div class="w-[18px]  grid place-items-center">
                 <svg class="serIcon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80%" viewBox="0 0 50 50">
                       <path
                         d="M 21 3 C 11.654545 3 4 10.654545 4 20 C 4 29.345455 11.654545 37 21 37 C 24.701287 37 28.127393 35.786719 30.927734 33.755859 L 44.085938 46.914062 L 46.914062 44.085938 L 33.875 31.046875 C 36.43682 28.068316 38 24.210207 38 20 C 38 10.654545 30.345455 3 21 3 z M 21 5 C 29.254545 5 36 11.745455 36 20 C 36 28.254545 29.254545 35 21 35 C 12.745455 35 6 28.254545 6 20 C 6 11.745455 12.745455 5 21 5 z">
                       </path>
                     </svg><img class="listScIcon" />
                </div> 
             <a class="searchText text-[2vw]"
             href="/${toolsName.path}">${toolsName.name}</a>
            </div>` 
            searchList.innerHTML += clutter

        }
                       )

    if(searchBar.value === ''){
        searchList.innerHTML = ''
    }
}


import { menuLAaya, menuGaya } from '/menu.js'

let  closeMenuBtn = document.querySelector('.closeMenu')
let menubarNavBtn = document.querySelector('.menubarNav')
menuBtn.onclick = ()=>{
    menuLAaya()
}
menubarNavBtn.onclick = ()=>{
    menuLAaya()
}
closeMenuBtn.onclick = ()=>{
    console.log('little')
    menuGaya()
}
let searchFixBtnIco = document.querySelector('.searchFixBtnIco')
let menuBtnChange = false
 searchFixBtnIco.onclick = ()=>{
     searchAaja()
     if(!menuBtnChange){
         menuBtnChange = true
         searchFixBtnIco.innerHTML = `<i class="fa-solid fa-xmark"></i>`
     } else if(menuBtnChange){
         menuBtnChange = false
        searchFixBtnIco.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`
     }
 }


//feedback

let feedBack = document.querySelector('.feedbak')
// feedBack.setAttribute('href' , '')
function openGmailCompose(email) {
  const mailtoLink = `mailto:${email}?subject=`;
  window.location.href = mailtoLink;
}


    feedBack.onclick = () => openGmailCompose('premcodeprojects2810@gmail.com');

let igGram = document.querySelectorAll('.fa-instagram')
console.log(igGram)
igGram.forEach(ig => {
    ig.parentElement.setAttribute('href', 'https://www.instagram.com/premkrbalmiki/')
    console.log(ig.parentElement)
})