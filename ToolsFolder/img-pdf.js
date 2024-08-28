let imageFiles = [];
let page1 = document.querySelector('.page1')
let nav = document.querySelector('nav')
let menuBtn = document.querySelector('.menuBtn')
let searchFixBtn = document.querySelector('.searchFixBtn')
let navHideTl = gsap.timeline({
  scrollTrigger: {
    trigger: page1,
    start: "10% 6%",
    end: "15% 12%",
    markers: false,
    scrub: 1,
  }
})
navHideTl.to(nav, {
  transform: 'translateY(-100%)',
})
navHideTl.to(menuBtn, {
  right: '15vw',
  opacity: 1,
}, 'a')
navHideTl.to(searchFixBtn, {
  right: '4vw',
  opacity: 1,
}, 'a')

window.jsPDF = window.jspdf.jsPDF;

// //img to pdf
let PDFDownBtn = document.querySelector('.PDFdownBtn')
let imgCount = document.querySelector('.imgCount')
let imgContDiv = document.querySelector('.imgContDiv')
let itpChooseFile = document.querySelector('.upload')
let imgCont;
let imgContDivArr = [];
///FO render image
const renderImages = () => {
  
  // console.log(imgContDivArr)
  imgContDiv.innerHTML = '';
    imgContDivArr.forEach((file, index) => {
    const reader = new FileReader();
    // let fileURl = URL.createObjectURL(file);
      // console.log(file[0])
    reader.readAsDataURL(file[0]);
   
    reader.onload = () => {
      const imageBox = document.createElement('div');
      imageBox.classList.add('imgCont');
      imageBox.setAttribute('data-index', index);
      imageBox.innerHTML = `
        <img 
      class="" src="${reader.result}">
        <button class="deleteButton" data-index="${index}">&times;</button>
      `;
      imgContDiv.appendChild(imageBox);


    }
  });
 
  if (imgContDivArr.length == 0) {
    itpChooseFile.classList.replace('uploadJs', 'upload')
    convertButton.style.display = 'none'
  } else {
    convertButton.style.display = 'flex'
  }
 
  imgCount.innerHTML = `<span>${imgContDivArr.length}</span>`
};

//
function FileLoad(event) {
  let file = event.target.files
 
  imgContDivArr.push(file)
  // const selectedFiles = Array.from(file);
  // console.log('sf')
  // console.log(selectedFiles)
  // imageFiles = imageFiles.concat(selectedFiles);
  // console.log('if')
  // console.log(imageFiles)
  renderImages()

  itpChooseFile.classList.replace('upload', 'uploadJs')
}







//pdf download

// function makePdf() {
//   console.log('little')
//   window.jsPDF = window.jspdf.jsPDF;
//   let myPdf = new jsPDF();
//   let imgLink = document.querySelector('.imgCont img').src
//   myPdf.html(imgContDiv, {
//     callback: function(doc) {
//       myPdf.save(imgLink.split('/').pop() + '.pdf')
//     },
//     x: 15,
//     y: 10,
//   },
//   )
// }

function deleteImage(index) {
  imgContDivArr.splice(index, 1);
  renderImages();
}


imgContDiv.addEventListener('click', (event) => {

  if (event.target.classList.contains('deleteButton')) {
 
    const index = parseInt(event.target.dataset.index);
    deleteImage(index);
  }
});
// 

const convertButton = document.getElementById('convertButton');
const clearButton = document.getElementById('clearButton');
const pdfDownloadLink = document.getElementById('pdfDownloadLink');


// Function to render the images in the UI





// Function to handle the conversion process
const convertToPdf = (dBTn) => {


  const doc = new jsPDF();
 
  let imagesProcessed = 0;
  const pageWidth = doc.internal.pageSize.getWidth() - 20;
 
  imgContDivArr.reverse().forEach((file, index) => {
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const scaleFactor = pageWidth / img.width;
        const imageHeight = img.height * scaleFactor;
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
        const imageData = canvas.toDataURL('image/jpeg');
        console.log(doc)
        if (index === 0) {
          doc.addImage(imageData, 'JPEG', 10, 10, pageWidth, imageHeight);
        } else {
          doc.addImage(imageData, 'JPEG', 10, 10, pageWidth, imageHeight);
          doc.addPage();
        }
        imagesProcessed++;
        if (imagesProcessed === imgContDivArr.length) {
         
              dBTn.onclick = ()=>{
              doc.save('converted.pdf')
            }
        }
      };
    };
  });
};

function downOption() {
  imgContDiv.style.display = 'flex'
  imgContDiv.style.justifyContent = 'center'
  imgContDiv.style.alignItems = 'center'
  
}
convertButton.addEventListener('click', () => {
  if(convertButton.innerText == 'Check Images?'){
    {document.querySelector("#up").style.display = " flex"}
    imgContDiv.style.display = 'grid'
    convertButton.innerHTML = 'Convert to PDF'
    renderImages()
    return
  }else{
    {document.querySelector("#up").style.display = " none"}
  }
 
  convertButton.innerHTML = 'Converting...'
  downOption()
  convertButton.disabled = true
 
  convertButton.innerHTML = 'Check Images?'
  imgContDiv.innerHTML = `<button id="downPDFBtn" class="bg-green-400 font-bold rounded-[30px] text-white mt-[18px] text-md px-5 py-2 ">Download PDF</button>`;
  convertButton.disabled = false
  let downPDFBtn = document.getElementById('downPDFBtn')
   convertToPdf(downPDFBtn);
  
});
// let upImage = document.querySelector('#up')
// let upImageLabe = document.querySelector('#up label')
// let imgupNew = document.querySelector('.uploadJs')
//     upImage.addEventListener('mousenter', () => {
//    if(upImage.classList.contains('uploadJs')){
//        upImageLabe.innerText = ''
//    }
    
//   })
