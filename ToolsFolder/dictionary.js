let wordInput = document.getElementById('wordInput'),
  word_search = document.querySelector('.si'),
  word = document.getElementById("word"),
  pronounce = document.querySelector('.pronounce'),
  play_voice_btn = document.getElementById('voice'),
  everyMeaningDiv = document.querySelector('.everyMeaningDiv')
noun_meanings_div = document.getElementById('noun_meanings'), synonymsList = document.getElementById('synonymsList'),
  audioTag = document.querySelector('audio')

word_search.addEventListener('click', () => {
  if (wordInput.value !== '') {
    fetchApis()
  }else{
  notEnter()

  }

}
)
function fetchApis() {
  let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput.value}`
  fetch(api).then(res => res.json()).then((data) => {
    // console.log(data)
    let ApiWord = data[0].word;
    word.style.display = 'block'
    word.innerText = ApiWord;
    pronounce.style.display = 'block'
    play_voice_btn.style.display = 'block'

    console.log(data)
    pronounce.innerText = data[0].phonetic;
    console.log(data[0].phonetics)
    let meaningsArr = data[0].meanings;
    let sO = 0
    let soundData = data[0].phonetics[sO].audio
    console.log('Megha')
    // console.log(soundData)
    if (!soundData) {
      sO += 1
      soundData = data[0].phonetics[sO].audio
      if (!soundData) {
        sO += 1
        soundData = data[0].phonetics[sO].audio
      }
    }
    console.log(soundData)
    audioTag.setAttribute('src', soundData)
    everyMeaningDiv.innerHTML = ''
    meaningsArr.map(everyThing => {

      everyMeaningDiv.innerHTML += `<div class="meaningAndLine w-full flex items-center gap-2 mt-[7vh]">
             <span class="text-lg text-indigo-600 font-bold underline">${everyThing.partOfSpeech.toUpperCase()}</span>
             <div class="h-[2px] bg-black w-full"></div>
           </div>
           <div class="MeaningsDiv w-[100%] mt-[5vh]">
             <h5 class="meaningText text-start text-md font-semibold">Meanings</h5>

             <ul class="noun-meanings mt-[4vh] text-start">
             </ul>
             <div class="synonymDiv w-full mt-[5vh] text-start flex items-center gap-[4vw]">
                <span class="synonyms text-md font-bold">Synonyms:</span>                          
               <ul class="synonymsList flex gap-2 text-sm">
                  <li>#low</li>
                  <li>#short</li>
                  <li>#megha</li>

                </ul>
             </div>


           </div>`
    })
    let noun_meanings = document.getElementsByClassName('noun-meanings')
    let synonyms = document.getElementsByClassName('synonymsList')

    let ulArr = Object.values(noun_meanings)
    let synonymArr = Object.values(synonyms)
    let li;
    // console.log(meaningsArr)
    ulArr.map((ele, index) => {
      let rr = meaningsArr[index].definitions
      // console.log(rr)
      rr.map((el, ind) => {
        if (ind > 2) return
        // console.log(ind)
        li = `<p>${el.definition}</p>`
        ele.innerHTML += `<li class="flex gap-[3vw] items-center">
             <span class="scale-[1.6] point text-indigo-500">	&#8226;</span>
             <div class="flex flex-row">${li}</div>
           </li>`

      })
    })
    synonymArr.map((syn, ind) => {
      // console.log(syn)

      let synArr = meaningsArr[ind].synonyms
      // console.log(synArr)
      let li = document.querySelectorAll('.synonyms')
      // let liArr = Object.values(li) 
      syn.innerHTML = ''
      checkSin(syn, synArr)

    })


  })
}
document.addEventListener('keypress', (e) => {
  if (e.key == 'Enter') {
    console.log('megha')
    if (wordInput.value !== '') {
        fetchApis()
    }else{
      notEnter()
      
    }
  }
})
function notEnter(){
  wordInput.style.border = '1px solid red'
  wordInput.setAttribute('placeholder', 'Please enter a word')
}
wordInput.onfocus = ()=>{
  wapas()
}
wordInput.oninput = ()=>{
  wapas()
}
function wapas(){
  wordInput.style.border = 'none'
  wordInput.setAttribute('placeholder', 'Search words..')
}
play_voice_btn.addEventListener('click', () => {
  audioTag.play()
})
console.log()

function checkSin(syn, synArr) {
  if (synArr == 0) { syn.innerText = '404 NOT FOUND(server problem)' }
  console.log(syn)
  synArr.map((syno, ind) => {

    if (ind > 2) return

    let syns = `<li>#${syno},</li>`
    console.log(syn)
    syn.innerHTML += syns



  })
}