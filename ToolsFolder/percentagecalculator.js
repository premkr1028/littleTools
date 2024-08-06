let types = document.querySelectorAll('.types')
window.onload = ()=>{
  types.forEach(type =>
    {
      if(window.innerHeight > window.innerWidth){
        type.style.justifyContent = 'start'
        type.style.width = '95%'
      }else{
        type.style.justifyContent = 'space-between'
        type.style.width = '87%'
      }
    }
    )


}

//type1
let type1CalPer = document.getElementById('type1CalPer')
let type1CalNum = document.getElementById('type1CalNum')
let type1Out = document.getElementById('type1Out')
function type1Cal(){
  if(type1CalPer.value !== '' && type1CalNum.value !== '')
  {
     let type1Ans = type1CalPer.value * type1CalNum.value / 100
    type1Out.value = type1Ans
  }else{
    if(type1CalPer.value === ''){
      type1CalPer.classList.add('error')
         type1CalPer.style.border = '1px solid red'
      setTimeout(()=>{
        type1CalPer.classList.remove('error')
          type1CalPer.style.border = '1px solid black'
      },200)
    }
    
    if(type1CalNum.value === ''){
          type1CalNum.classList.add('error')
             type1CalNum.style.border = '1px solid red'
      setTimeout(()=>{
            type1CalNum.classList.remove('error')
              type1CalNum.style.border = '1px solid black'
      },200)
    }
  }
}

//type2
let type2CalPer = document.getElementById('type2CalPer')
let type2CalNum = document.getElementById('type2CalNum')
let type2Out = document.getElementById('type2Out')

function type2Cal(){

  if(type2CalPer.value !== '' && type2CalNum.value !== '')
    {
      let ans = type2CalPer.value/type2CalNum.value * 100
      type2Out.value = ans + '%'
    }else{
      if(type2CalPer.value === ''){
        type2CalPer.classList.add('error')
           type2CalPer.style.border = '1px solid red'
        setTimeout(()=>{
          type2CalPer.classList.remove('error')
            type2CalPer.style.border = '1px solid black'
        },200)
      }

      if(type2CalNum.value === ''){
            type2CalNum.classList.add('error')
               type2CalNum.style.border = '1px solid red'
        setTimeout(()=>{
              type2CalNum.classList.remove('error')
                type2CalNum.style.border = '1px solid black'
        },200)
      }
    }
  
}

//type3
let type3in1 = document.querySelector('#type3in1')
let type3in2 = document.querySelector('#type3in2')
let type3Out = document.querySelector('#type3Out')

function type3Cal(){
  if(type3in1.value !== '' && type3in2.value !== '')
    {
      let diffeBtw = type3in2.value - type3in1.value
      let ans = diffeBtw / type3in1.value * 100
      console.log(ans)
      type3Out.value = ans + '%'
    }else{
      if(type3in1.value === ''){
          type3in1.classList.add('error')
             type3in1.style.border = '1px solid red'
        setTimeout(()=>{
            type3in1.classList.remove('error')
              type3in1.style.border = '1px solid black'
        },200)
      }

      if(type3in2.value === ''){
              type3in2.classList.add('error')
                 type3in2.style.border = '1px solid red'
        setTimeout(()=>{
                type3in2.classList.remove('error')
          type3in2.style.border = '1px solid black'
        },200)
      }
    }

}