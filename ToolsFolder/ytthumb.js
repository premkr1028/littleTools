//smoth scroll function
let img;
let id;
const lenis = new Lenis()
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

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
let inpu = document.querySelector('#linkInput')
let getBtn = document.querySelector('#getBtn')
let imgCont = document.querySelector('.img')

let qualityChoose = document.querySelector('select')
qualityChoose.onchange = () => {
    generateImg()
}
inpu.onfocus =()=>{
    inpu.addEventListener('keypress' ,(e)=>{
        if(e.key == 'Enter'){
            generateImg()
        }
    })
  if(imgCont.innerHTML == '<p class="text-center">You Enterd a invalid Link <br>Check again the link</p>'){
      imgCont.innerHTML = ''
  }
    inpu.classList.remove('invalid')
    
    inpu.setAttribute('placeholder', 'Enter youtube video link')
    inpu.classList.remove('placeColor')
}
function generateImg() {

    let uFor = [
        "https://youtu.be/",
        'https://www.youtube.com/watch?v=',
        'https://youtube.com/shorts/',
        'https://www.youtube.com/embed/',
        'https://www.youtube.com/oembed',
    ]
    let link = inpu.value;
    console.log(link)
    if (link == '') {
        inpu.classList.add('invalid')
        inpu.classList.add('shake')
        inpu.setAttribute('placeholder', 'You did not enter the link')
        inpu.classList.add('placeColor')
        
        setTimeout(() => {
            inpu.classList.remove('shake')

        }, 300)
        return
    }
    imgCont.style.color = 'red'
    imgCont.innerHTML = `Processing..`
     
///
      if (link.indexOf(uFor[0]) != -1) {
        id = link.split(uFor[0])[1].split('?')[0]
        mainThing(id)
      } else if (link.indexOf(uFor[1]) != -1) {
        id = link.slice(-11)
        mainThing(id)
      } else if (link.indexOf(uFor[2]) != -1) {

        id = link.split(uFor[2])[1].split('?')[0]
        console.log(id)
        mainThing(id)
      } else if (link.indexOf(uFor[3]) != -1) {
        id = link.slice(-11)
        mainThing(id)
      } else if (link.indexOf(uFor[4]) != -1) {
        id = link.slice(-11)
        mainThing(id)
      }else{
          imgCont.innerHTML = '<p class="text-center">You Enterd a invalid Link <br>Check again the link</p>'
      }
    ///
    console.log('id:' + id)
  
    }
function mainThing(id){
    img = `https://img.youtube.com/vi/${id}/${qualityChoose.value}.jpg`

    imgCont.innerHTML = `<img src="${img}" alt="">`
}
getBtn.addEventListener('click', () => {
    generateImg()
})
let downBtn = document.querySelector('#downBtn')
downBtn.onclick = () => {
    const cors = "https://api.codetabs.com/v1/proxy?quest=";
    let imageData = document.querySelector('.img img').getAttribute('src')
    let newImageData = cors + imageData
    console.log(imageData)
    downloadThumbnail(newImageData)
}
async function downloadThumbnail(url) {
    // Create Blob Oject from URL
    const image = await fetch(url);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);
    // Create anchor tag and add URL
    const link = document.createElement("a");
    link.href = imageURL;

    // Check URL match and add Download name
    if (image.url.includes("hqdefault")) {
        link.download = "thumbnail-medium.jpg";
    } else if (image.url.includes("mqdefault")) {
        link.download = "thumbnail-low.jpg";
    } else if (image.url.includes("maxresdefault")) {
        link.download = "thumbnail-max.jpg";
    }

    // Add link to the DOM, and remove link after click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}