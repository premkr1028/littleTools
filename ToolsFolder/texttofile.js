let texts = document.getElementById("text-area");
let fileName = document.getElementById("fileName");
let selectType = document.getElementById("selectType");
let saveBtn = document.querySelector("#saveBtn");

saveBtn.addEventListener('click',()=>{

  if(texts.value !== ""){
    let blob = new Blob([texts.value], {type: selectType.value});
    console.log(blob)
    let url = URL.createObjectURL(blob);
    console.log(url)
    let a = document.createElement('a');
    a.href = url
    a.download = fileName.value;
    a.click()
  }else{
    alert('text Area is empty')
  }
  
})

selectType.onchange = ()=>{
  let selectOption = selectType.options[selectType.selectedIndex].text;
  
  saveBtn.innerText =  `Save as ${selectOption.split(" ")[0]}`
}

if(window.innerHeight > window.innerWidth){
  texts.style.height = "20vh"
}