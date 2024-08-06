
export function menuLAaya(){
    let menuLayBAckGround = document.querySelector('.menuLay')
    let closeMenuBtn = document.querySelector('.closeMenu')
    let menubarNavBtn = document.querySelector('.menubarNav')
    
    menuLayBAckGround.style.display = 'flex'
  let menuTime = gsap.timeline()
        menuTime.to(menuLayBAckGround ,{
        width:'100vw',
        duration:0.5,

    })
    menuTime.to('.menuLay span a',{
       top:0,
        duration:0.5
    },'w')
    menuTime.to('.menuLay ul li',{
        top:0,
            duration:0.5
    },'w')
    menuTime.to('.menuLay .closeMenu h1',{
        opacity:1,
            duration:0.5
    },'w')
}
export function menuGaya() {
    let menuLayBAckGround = document.querySelector('.menuLay')
    let closeMenuBtn = document.querySelector('.closeMenu')
    let menubarNavBtn = document.querySelector('.menubarNav')
    console.log('megha')

      let menuTime = gsap.timeline()

        menuTime.to('.menuLay span a',{
           top:100,
            duration:0.1
        },'w')
        menuTime.to('.menuLay ul li',{
            top:100,
                duration:0.1
        },'w')
    menuTime.to('.menuLay .closeMenu h1',{
        opacity:0,
            duration:0.1
    },'w')
    menuTime.to(menuLayBAckGround ,{
        width:'0vw',
        duration:0.5,
    })
    setTimeout(()=>{
         menuLayBAckGround.style.display = 'none'
    },600)
}
 // default menuLayAa 