
let givenLink = document.querySelector('#givenLink')
let takenLink = document.querySelector('#takenLink')
let shortUrlBtn = document.querySelector('.LL')
let copyUrlBtn = document.querySelector('.SL')
let shortLink;
let popUUp = document.querySelector('.popUUp')
givenLink.onfocus = ()=>{
  givenLink.setAttribute('placeholder', 'Enter your URL')
  givenLink.style.border = '1px solid gray'
}
//function
function short() {
  let token = 'e613e4b00e498eab8589f19a0ce44f481a3e324e'

  if(givenLink.value == ''){
    givenLink.setAttribute('placeholder','Enetr a URL please')

    givenLink.classList.add('error')
    setTimeout(()=>{
      givenLink.classList.remove('error')
    },400)
    return
  }
  fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "long_url": `${givenLink.value}`, "domain": "bit.ly" })
  }).then(res => res.json()).then((data) => {
    if (data.message === 'INVALID_ARG_LONG_URL') {
      givenLink.style.border = '1px solid red'
      givenLink.setAttribute('placeholder','Invalid URL...')
      
      givenLink.classList.add('error')
      setTimeout(()=>{
        givenLink.classList.remove('error')
      },400)
      // alert('invalid link')
      givenLink.value = ''
    } else {
      
      takenLink.value = data.link
      popUUp.style.display = 'flex'
      popUUp.style.opacity = 1;
      setTimeout(()=>{
         popUUp.style.opacity =0;
      },1000)
    }
      
      
    

  })

}
shortUrlBtn.addEventListener('click', short)
console.log('megha')
function copy() {
  navigator.clipboard.writeText(takenLink.value)
}
copyUrlBtn.addEventListener('click', copy)