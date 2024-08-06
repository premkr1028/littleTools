
let page1 = document.querySelector('.page1')
let nav = document.querySelector('nav')
let menuBtn = document.querySelector('.menuBtn')
let searchFixBtn = document.querySelector('.searchFixBtn')
let downBtn = document.querySelector('.downBtn')
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



let imageUrl;
//start
// let fileInput = document.querySelector('.fileInput')
function FileLoad(event) {
    let image = event.target.files[0]
    let formData = new FormData();
    formData.append('image_file', image)
    formData.append('size', 'auto')
    document.querySelector('.preview').style.display = 'flex'
    document.querySelector('.preview').innerHTML = `<div class="lds-dual-ring"></div>
    <p>Loading.....</p>
     `

    fetch(`https://api.remove.bg/v1.0/removebg`, {
        method: 'POST',
        headers: {
            'X-Api-Key': 'UMX6EmpJSHKaGsz2y2BY99zb'
        },
        body: formData
    })
        .then(function(res) {
            {


                return res.blob()
            }
        })
        .then(function(final) {
            console.log(final)

            let url = URL.createObjectURL(final)
            imageUrl = url
            console.log(url)
            let img = document.createElement('img')
            img.classList.add('imgPre')
            img.src = url;
            // img.style.width = '30vw'
            document.querySelector('.preview').innerHTML = ''

            document.querySelector('.preview').appendChild(img)
            downBtn.style.display = 'block'
        })
        .catch(Error => console.log(Error))


}

function downn() {
    let an = document.createElement('a')
    an.href = imageUrl
    an.download = 'no-bg.png'
    document.querySelector('.rbgConvCont').appendChild(an)
    an.click()

}