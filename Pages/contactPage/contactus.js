let detss = document.getElementById("detss");
let maincontact = document.getElementById("mainContact");
let mainTag = document.querySelector("main");
let submit_btn = document.getElementById("submit-button");
let tl = gsap.timeline({
  scrollTrigger: {
    target: detss,
    markers: false,
    start: "top top",
    end: "bottom top",
    duration: 2,
    scrub: true,
    pin: true,
    pinSpacing: false,
    scrub: true,
  }
})
tl.to(detss, {
  position: 'sticky',
  top: 0,
  duration: 2,
})
tl.to(maincontact, {
  position: 'relative',
  top: 0,
  duration: 2

}, 's')

let scLinks = document.querySelectorAll('.links h1')


function ani() {
  gsap.to('.spant', {
    top: '0',
    stagger: {
      each: 0.02,
      grid: 'auto'
    },
    // delay:0.02
  })
}


let igTag = document.querySelector('.ig')
let twTag = document.querySelector('.tw')
let ldTag = document.querySelector('.ld')
igTag.addEventListener('mouseenter', () => {

  let ins = igTag.innerText
  igTag.innerHTML = ''
  let chars = ins.split('')
  chars.map((char, i) => {
    let span = document.createElement('span')
    span.innerText += char
    span.classList.add('spanig')
    igTag.appendChild(span)
    span.style.top = '100%'

  })
  gsap.to('.spanig', {
    top: '0',
    duration: 0.2,
    stagger: {
      each: 0.02,
      grid: 'auto'
    },

  })
})
twTag.addEventListener('mouseenter', () => {
  let ins = twTag.innerText
  twTag.innerHTML = ''
  let chars = ins.split('')
  chars.map((char, i) => {
    let span = document.createElement('span')
    span.innerText += char
    span.classList.add('spantw')
    twTag.appendChild(span)
    span.style.top = '100%'

  })
  gsap.to('.spantw', {
    top: '0',
    duration: 0.2,
    stagger: {
      each: 0.02,
      grid: 'auto'
    },
    // delay:0.02
  })
})
ldTag.addEventListener('mouseenter', () => {

  let ins = ldTag.innerText
  ldTag.innerHTML = ''
  let chars = ins.split('')
  chars.map((char, i) => {
    let span = document.createElement('span')
    span.innerText += char
    span.classList.add('spanld')
    ldTag.appendChild(span)
    span.style.top = '100%'

  })
  gsap.to('.spanld', {
    top: '0',
    duration: 0.2,
    stagger: {
      each: 0.02,
      grid: 'auto'
    },

  })
})

// let eyes = document.querySelectorAll('.eye')
// let eyeBalls = document.querySelectorAll('.eyeBall')

// document.addEventListener('mousemove', (e) => {
//   let mouseX = e.clientX
//   let mouseY = e.clientY
//   eyeBalls.forEach((eyeBall, i) => {
//     let eye = eyes[i]
//     let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2
//     let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2
//     let deltaX = mouseX - eyeX
//     let deltaY = mouseY - eyeY
//     let eyeBallWidth = eyeBall.getBoundingClientRect().width
//     console.log(eyeBallWidth)
//     let mRange = -200;
//     let frac = deltaY / eyeBallWidth
//     let xTra = mRange * frac
//     // console.log(xTra)
//     let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
//     let maxDistance = eye.clientWidth / 2
//     let scale = maxDistance / distance
//     let x = deltaX * scale
//     let y = deltaY * scale
//     // console.log(`dis ${distance} delX ${deltaX} delY ${deltaY} maxDis ${maxDistance} scale ${scale} x eX${eyeX} eY${eyeY} x ${x} y ${y}`)
//     // gsap.to(eyeBall, {
//     //   x: x,
//     //   y: y,
//     //   scale: scale,
//     //   duration: 0.2,
//     //   ease: 'power2.inOut'
//     // })
//   })
// })

// eyeBalls
// eyes.forEach(eye => {
//   console.log()
// })

// const leftEye = document.getElementById('leftEye');
// const rightEye = document.getElementById('rightEye');
// const leftPupil = leftEye.querySelector('.eyeBall');
// const rightPupil = rightEye.querySelector('.eyeBall');

// function movePupil(event, eye, pupil) {
//   const eyeRect = eye.getBoundingClientRect();
//   const centerX = eyeRect.left + eyeRect.width / 2;
//   const centerY = eyeRect.top + eyeRect.height / 2;

//   // Calculate angle
//   const radians = Math.atan2(event.pageX - centerX, event.pageY - centerY);
//   const angle = radians * (180 / Math.PI) * -1 + 180;

//   // Limit pupil movement to eye bounds
//   const distance = Math.min(Math.hypot(event.pageX - centerX, event.pageY - centerY), eyeRect.width / 3);

//   // Move pupil
//   pupil.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translate(${distance}px)`;
// }

// document.addEventListener('mousemove', function(event) {
//   movePupil(event, leftEye, leftPupil);
//   movePupil(event, rightEye, rightPupil);
// });

let text = document.querySelector('#text')
console.log(text)
let tex = 'CONTACT US-CONTACT US-CONTACT US-'
text.innerHTML = tex.split("").map((val, i) => `<span style="transform: rotate(${i * 11.2}deg)" class="letters">${val}</span>`).join("")
console.log(text)

///

// function drawCircle(event){

// var text = "CONTACT US! CONTACT US!";

// var word = text.split('');

// var quantity = word.length;

// var radius = 3;

// var padding = 6;

// var radians = 3.14; 

// var angle = 360/(2*Math.PI);

// var point = Math.PI/quantity;

// var step = (2*Math.PI)/quantity;


// for(let i = 0, j = 0; i<radians; i+=point, j++){

// var cat_oppos =  Math.sin(step*j) * window.innerWidth/100 * radius;
// var cat_attach = Math.cos(step*j) * window.innerWidth/100 * radius;

// var elm = document.createElement('div');
// elm.innerHTML = word[j];
// elm.classList.add("dot");

// elm.style.top = padding + cat_oppos + 'vw';
// elm.style.left = padding + cat_attach + 'vw';
// elm.style.transform = 'rotate('+((angle*(step*j))+90)+'deg)';

// document.getElementById("text").appendChild(elm);
// }


// var elm = document.createElement('div');
// elm.innerHTML = "|";
// elm.classList.add("dot");

// elm.style.top = padding  + 'vw';
// elm.style.left = padding  + 'vw';


// document.getElementById("text").appendChild(elm);


// }

// drawCircle();