let page1 = document.querySelector('.page1')
let nav = document.querySelector('nav')
let menuBtn = document.querySelector('.menuBtn')
let searchFixBtn = document.querySelector('.searchFixBtn')
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

//api work
let pasteLink = []
let inpu = document.querySelector('.getUrl')
let downBtn = document.querySelector('.downBtn')
let genBtn = document.querySelector('.genBtn')
let sizeSelect = document.querySelector('#chooseSize')

let firColIn = document.querySelector('#firColIn')
let secColIn = document.querySelector('#secColIn')
let URL;
let downLink;
let storeLink = document.querySelector('.storeLink')
let img = document.querySelector('.img')
function apiWork() {
    // console.log(firColIn.value.slice(1))
    // console.log(sizeSelect.value)
    let ss = sizeSelect.value
    document.querySelector('.qrPic').style.zIndex = 1
    document.querySelector('.qrPic').style.transform = 'translateX(0)'
    if (inpu.value !== '') {
        URL = `https://api.qrserver.com/v1/create-qr-code/?size=${ss}&data=${inpu.value}&color=${firColIn.value.slice(1)}&bgcolor=${secColIn.value.slice(1)}`
        img.innerHTML = `
       <h3 class="text-xs text-center">Your QR code👇...</h3>
       
       <img src="${URL}" class="qrImage"/>`
        pasteLink.push(inpu.value)
        inpu.value = ''
       
    } else {
        img.innerHTML = `
       <p class="text-red-400 text-sm font-semibold text-center">You did'nt enter anything!</p> `
    }
    document.querySelector('.storeLink').innerHTML = ''
        pasteLink.map((links) =>{
        // console.log(links)
        let linkBox = document.createElement('div')
        linkBox.classList.add('linkBox')
        linkBox.innerHTML = `
        <div class=" w-full h-[30px] border-2 border-black flex justify-between items-center">
          <div class="sn border w-[10vw]">1</div>
          <div class="link w-[50vw] text-xs text-nowrap">
          ${links}</div>
          <div class="copy w-[18vw] text-xs">
            copy
          </div>
          <div class="delete w-[18vw] text-xs">
            delete
          </div>
        </div>
        `
        document.querySelector('.storeLink').appendChild(linkBox)
    }
        )
}
genBtn.addEventListener('click', apiWork)
document.addEventListener('keypress',(e)=>{
   if(inpu.value){
       if(e.key == 'Enter'){
           apiWork()
       }
   }
    
})




downBtn.addEventListener('click',()=>{

    let downImg = document.querySelector('.qrImage')
    domtoimage.toPng(downImg).then(data =>{
    
           let linkTag = document.createElement('a')
           linkTag.download =  'qr.jpeg'
           linkTag.href = data
           linkTag.click()
}            )})


storeLink.addEventListener('click',(e)=>{
    if(e.target.classList.contains('copy')){
        let copyLink = e.target.parentElement.children[1].innerText
        console.log(copyLink)

        window.navigator.clipboard.writeText(copyLink)
    }

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})