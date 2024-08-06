let text_area = document.querySelector('#text-area')
let charCount = document.querySelector('.charCount span')
let wordCount = document.querySelector('.wordCount span')
function charCounting(){
  charCount.innerText = text_area.value.length
}
function wordCounting(){
  
let wordArr =  text_area.value.split(" ")
  wordCount.innerText = wordArr.length
  if(text_area.value == ''){
    wordCount.innerText = 0
  }
}
text_area.oninput = () =>{
  charCounting()
  wordCounting()
}
function clearInput(){
  text_area.value = ''
   wordCount.innerText = 0
   charCount.innerText = 0
}