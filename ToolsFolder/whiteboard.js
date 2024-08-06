let board = document.querySelector(".cont .panel canvas");
let optionArr = document.querySelectorAll(".option");
let brush_size = document.querySelector('#brush-size')
let fillcolor = document.getElementById('fill-color')
let colors = document.querySelectorAll('.colorOptions .color')
let ctx = board.getContext
  ('2d')
let isDrawing = false;
let prevMouseX, prevMouseY, snapshot;
let selectedTool = 'brush'
let brushSize = 5
let paintColor = 'black'
function canvasBack(){
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, board.width, board.height)
  ctx.fillStyle = paintColor
}
window.onload = () => {
  board.width = board.offsetWidth;
  board.height = board.offsetHeight
  canvasBack()
}
function drawRect(e) {

  
  if (!fillcolor.checked) {
    ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY)
  } else {
    ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY)
  }
}
function drawCircle(e) {
  ctx.beginPath()
  let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2))
  ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI)
  fillcolor.checked ? ctx.fill() : ctx.stroke()
  // ctx.clearRect(0, 0, board.width, board.height)
}
function drawTriangle(e){
  ctx.beginPath()
  ctx.moveTo(prevMouseX, prevMouseY)
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY)
  ctx.closePath()
  // ctx.closePath()
 fillcolor.checked ? ctx.fill() : ctx.stroke()
}
function draw(e) {
  if (!isDrawing) return;
  ctx.lineCap = 'round'
  ctx.putImageData(snapshot, 0, 0)
  ctx.strokeStyle = paintColor;
  ctx.fillStyle = paintColor
  if (selectedTool == 'brush' || selectedTool == 'eraser') {
    ctx.lineTo(e.offsetX, e.offsetY);
    selectedTool == 'brush' ? ctx.stroke() : ctx.strokeStyle = 'white'
    ctx.stroke()
  } else if (selectedTool == 'rectangle') {
    drawRect(e)
  } else if (selectedTool == 'circle') {
    drawCircle(e)
  } else if (selectedTool == 'triangle') {
    drawTriangle(e)
  }

}

board.addEventListener('mousedown', (e) => {
  isDrawing = true;
  prevMouseX = e.offsetX;
  prevMouseY = e.offsetY;

  ctx.lineWidth = brushSize;

  ctx.beginPath();
  snapshot = ctx.getImageData(0, 0, board.width, board.height)
})
board.addEventListener('mousemove', draw)
board.addEventListener('mouseup', () => {
  isDrawing = false
})

optionArr.forEach(option => {
  option.addEventListener('click', () => {
    document.querySelector('.options .active').classList.remove('active')
    option.classList.add('active')
    selectedTool = option.id
  })
})
brush_size.oninput = () => {
  brushSize = brush_size.value
}

function clearCanvas() {
  ctx.clearRect(0, 0, board.width, board.height)
  canvasBack()
}


colors.forEach(colorElem => {
  colorElem.addEventListener('click', () => {
    document.querySelector('.colorOptions .colorSelect').classList.remove('colorSelect')
    colorElem.classList.add('colorSelect')
    paintColor = window.getComputedStyle(colorElem).getPropertyValue('background-color');
  })
})

function downloadImg(){
  let img = board.toDataURL('image/png')
  let a = document.createElement('a')
  a.href = img
  a.download = 'whiteboard.png'
  a.click()
}