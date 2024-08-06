let copyPop = document.getElementById('copyPop')
let urlInput = document.getElementById('url-input')
let ul = document.getElementById('tags-list')
let getTag = document.getElementById('get-tagBtn')
// let tagCont = document.getElementById('tags-list')
let tags_sankhyaDiv = document.getElementById('tags-sankhya')
urlInput.onfocus = () => {
  urlInput.setAttribute('placeholder', 'Enter video link/URl')
  urlInput.style.border = '1px solid gray'
}
let id;
function getTags() {
  ul.innerHTML = `Processing..`
  let uFor = [
    "https://youtu.be/",
    'https://www.youtube.com/watch?v=',
    'https://youtube.com/shorts/',
    'https://www.youtube.com/embed/',
    'https://www.youtube.com/oembed',


  ]


  let url = urlInput.value;
  if (url == '') {
    ul.innerHTML = `faield.. TRY AGAIN`
    urlInput.setAttribute('placeholder', 'Enetr a URL please')
    urlInput.style.border = '1px solid red'
    urlInput.classList.add('error')
    setTimeout(() => {
      urlInput.classList.remove('error')
    }, 400)
    return
  }
  if (url.indexOf(uFor[0]) != -1) {
    id = url.split(uFor[0])[1].split('?')[0]
    mainThing(id)
  } else if (url.indexOf(uFor[1]) != -1) {
    id = url.slice(-11)
    mainThing(id)
  } else if (url.indexOf(uFor[2]) != -1) {

    id = url.split(uFor[2])[1].split('?')[0]
    console.log(id)
    mainThing(id)
  } else if (url.indexOf(uFor[3]) != -1) {
    id = url.slice(-11)
    mainThing(id)
  } else if (url.indexOf(uFor[4]) != -1) {
    id = url.slice(-11)
    mainThing(id)
  }
  else {
    urlInput.value = ''
    ul.innerHTML = 'Failed Try Again!'
      urlInput.setAttribute('placeholder', 'Invalid URL / Link')
    urlInput.style.border = '1px solid red'
    urlInput.classList.add('error')
    setTimeout(() => {
      urlInput.classList.remove('error')
    }, 400)
  }


}
function mainThing(id) {
  let key = `AIzaSyA15tjvvrzP_IeAhi2HoFTL0gVJ_0yq3FA`;
  let API = `
  https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${key}&part=snippet,contentDetails,statistics,status`

  fetch(API).then(res => res.json()).then(data => {
    let tags = data.items[0].snippet.tags;
    tagsCount(tags)
    addTags(tags)
  }

  ).catch(e => console.log(e))
  urlInput.value = '';
  document.querySelector('.tagsDown').style.display = 'flex'
}
function addTags(tags) {
  console.log('little')
  // document.querySelectorAll('li').forEach(li => li.remove())
  ul.innerHTML = ''
  tags.map(tgs => ul.innerHTML += `<li class="ytTags">${tgs}</li>`)

}
function tagsCount(tags) {
  let count = tags.length - 1
  tags_sankhyaDiv.innerText = count
}

function copyTags() {
  let tags = document.querySelectorAll('li')
  let tagString = ''
  tags.forEach(tag => tagString += tag.innerText + ',')
  navigator.clipboard.writeText(tagString)
  copyPop.style.scale = '1'
  setTimeout(function() {
    copyPop.style.opacity = '0'
    copyPop.style.scale = '0'
    setTimeout(() => {
      copyPop.style.opacity = '1'
    }, 10)
  }, 500)
}