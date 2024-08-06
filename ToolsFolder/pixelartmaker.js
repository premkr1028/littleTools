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
let start = false
let size = 15
let draw = false
let erase = false
let boardWidth = widthRange.value,
  boardHeight = heightRange.value
window.onload = () => {
  if (start == false) {
    clearBtn.classList.add('disable')
    saveBtn.classList.add('disable')
    eraseBtn.classList.add('disable')
    // choose_color.classList.add('disable')
  }
}

widthRange.oninput = (e) => {
  e.target.nextElementSibling.innerText = e.target.value
}
heightRange.oninput = (e) => {
  e.target.nextElementSibling.innerText = e.target.value
}

//original kaam
startBtn.addEventListener('click', () => {
  if (start == true) {
    drawwingArea.innerHTML = 'wait.. board is generating'
    setTimeout(() => {
      drawwingArea.innerHTML = ''
      gridMake()
    }, 1500)
    return
  }
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
  setTimeout(() => {
    drawwingArea.innerHTML = ''
    gridMake()
  }, 1500)
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


function gridMake() {
  document.querySelector('.drawPart').innerHTML = ''
  boardWidth = widthRange.value,
    boardWidth = parseInt(widthRange.value, size),
    boardHeight = heightRange.value
    boardHeight = parseInt(heightRange.value, size)
  console.log(boardHeight , boardWidth)
  let numOfbox = boardWidth * boardHeight
  for (i = 0; i < numOfbox; i++) {
    let grids = document.createElement('div')
    grids.classList.add('grids')
    grids.style.width = size + 'px'
    // console.log(grids.style.width)
    grids.style.height = size + 'px'
    // drawwingArea.style.height ='max-content'
    // drawwingArea.style.width = 'max-content'
    let gridsArr = document.querySelectorAll('.grids')
    gridsArr.forEach(gri => {
      gri.addEventListener('mousedown', () => {
        draw = true
        // console.log('megha')
      })

      gri.addEventListener('mousemove', () => {
        if (!draw) return
        if (erase) gri.style.backgroundColor = 'white'
        else gri.style.backgroundColor = choose_color.value
      })
      gri.addEventListener('mouseup', () => {
        draw = false

      })
      clearBtn.addEventListener('click', () => {
        gridsArr.forEach(gri => {
          gri.style.backgroundColor = 'white'
        })
      })
    })
    drawwingArea.style.height = '400px'
    drawwingArea.append(grids)


  }
}