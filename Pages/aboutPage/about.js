
// console.log(menuLayAa)
// console.log('megha')
let  mainAbout = document.querySelector('.aboutSection p')
let tipni = document.querySelector('.tipni p')
const texts = new SplitType(mainAbout)
let tipniText = new SplitType(tipni)
gsap.to('span p' , {
  transform:'translateY(0)',
  duration:0.5,
  // scrub:true,
  stagger:0.1
})

gsap.to('span h2',{
  opacity:1,
  duration:1,
})




  

  
  gsap.to('.aboutSection p .char',{
    y:'0%',
    stagger:0.008,
    duration:0.4,
    scrollTrigger:{
      trigger:'.aboutSection',
      start:'top 40%',
    }
 
  })
gsap.to('.tipni .char',{
  y:'0%',
  stagger:0.008,
  duration:0.4,
  scrollTrigger:{
    trigger:'.aboutSection',
    start:'50% 40%',
   // markers:true
  }

})

gsap.to('.mb img',{
  height: '100%',
 
    scrollTrigger:{
      trigger:'.aboutSection',
      start:'top 40%',
      end:'70% 40%',
      scrub:true
  }
})