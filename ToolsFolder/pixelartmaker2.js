
let startBtn = document.querySelector('#start'),
  clearBtn = document.querySelector('.clear'),
  eraseBtn = document.querySelector('.erase'),
  saveBtn = document.querySelector('.save'),
  choose_color = document.querySelector('#choose-color'),
  widthRange = document.querySelector('#width-range'),
  heightRange = document.querySelector('#height-range'),
  drawwingArea = document.querySelector('.drawPart'),
  line = document.querySelector('.line'),
  select = document.querySelector('#choose-size')
 let drawPartUp = document.querySelector('.drawPartUp')  
let start = false
let draw = false
let erase = false
let size = 15
let boardWidth = widthRange.value,
  boardHeight = heightRange.value
let numOfbox;
window.onload = () => {
    clearBtn.classList.add('disable')
    saveBtn.classList.add('disable')
    eraseBtn.classList.add('disable')
}

widthRange.oninput = (e) => {
  e.target.nextElementSibling.innerText = e.target.value
  boardWidth = e.target.value
}
heightRange.oninput = (e) => {
  e.target.nextElementSibling.innerText = e.target.value
  boardHeight = e.target.value
}

//original kaam
startBtn.addEventListener('click', () => {
  
  start = true
  line.style.display = 'block'
  size = select.value
  if (erase) {
    erase = false
    eraseBtn.classList.add('erase')
    eraseBtn.classList.remove('eraseActive')
  }
  if (start == true) {
    clearBtn.classList.remove('disable')
    saveBtn.classList.remove('disable')
    eraseBtn.classList.remove('disable')
  }
  drawwingArea.innerHTML = 'wait.. board is generating'
  drawwingArea.innerHTML = ''
    gridMake()
 
})


eraseBtn.addEventListener('click', () => {
  if (!start) return
  erase = !erase
  console.log(erase)
  if (erase) {
    eraseBtn.classList.add('eraseActive')
    eraseBtn.classList.remove('erase')
  } else {
    eraseBtn.classList.add('erase')
    eraseBtn.classList.remove('eraseActive')
  }
})
function listners(grids){
  console.log(grids)
  grids.addEventListener('mousedown', () =>{console.log('megha')
     draw = true }                   
                        )
  grids.addEventListener('mousemove', () =>{
    if(draw == false) return
    if(erase) grids.style.backgroundColor = 'white'
    else grids.style.backgroundColor = choose_color.value
  })
  grids.addEventListener('mouseup', () =>{
    draw = false
  })
  clearBtn.addEventListener('click',()=>{
     grids.style.backgroundColor = 'white'
  })
}

function gridMake() {
  
   numOfbox = boardWidth * boardHeight
  for (i = 0; i < numOfbox; i++) {
    let grids = document.createElement('div')
    grids.classList.add('grids')
    grids.style.width = size + 'px'
    grids.style.height = size + 'px'
    drawwingArea.style.height = 'max-content'
    drawwingArea.style.width = size* boardWidth + 'px'

    listners(grids)
    // let gridsObj = document.querySelectorAll('.grids')
    // let gridsArr = Object.values(gridsObj)
    // console.log(gridsArr)
    // gridsArr.map(gri => {
    //   gri.addEventListener('mousedown', () => {
    //     draw = true
       
    //   })

    //   gri.addEventListener('mousemove', () => {
    //     if (!draw) return
    //     if (erase) gri.style.backgroundColor = 'white'
    //     else gri.style.backgroundColor = choose_color.value
    //   })
    //   gri.addEventListener('mouseup', () => {
    //     draw = false

    //   })
    //   clearBtn.addEventListener('click', () => {
    //     gridsArr.forEach(gri => {
    //       gri.style.backgroundColor = 'white'
    //     })
    //   })
    // })

    drawwingArea.append(grids)
  }
}

// let domtoimage ={
//   toJpeg:'toJpeg'
// }
