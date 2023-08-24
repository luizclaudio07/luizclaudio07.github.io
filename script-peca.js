let currentIndex = 0;
const images = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(index) {
  currentIndex = index;
  updateLightboxImage();
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeImage(change) {
  currentIndex += change;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateLightboxImage();
}

function updateLightboxImage() {
  const imageSrc = images[currentIndex].getAttribute('src');
  lightboxImg.setAttribute('src', imageSrc);
}

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    openLightbox(index);
  });
});


function getCategoriaParam() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  return params.get('categoria');
}




function montarPeça(){
  
  fetch('https://raw.githubusercontent.com/luizclaudio07/luizclaudio07.github.io/master/bd.json?v='+Math.floor(Math.random() * 999)) 
  .then(response => response.json())  
  .then(data =>  { 
    var bicho = data.find(x => x.categoria == getCategoriaParam()) ;
  })
  .catch(error => { console.error('Erro ao carregar o arquivo JSON:', error) });
  

}


