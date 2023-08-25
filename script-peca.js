
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
var imagesList;


function getParam(param) {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  return params.get(param);
}


function carregaJSON(){
  fetch('https://raw.githubusercontent.com/luizclaudio07/luizclaudio07.github.io/master/bd-pecas.json?v='+Math.floor(Math.random() * 999)) 
  .then(response => response.json())  
  .then(data =>  { 

    listaPecas = data.find(x => x.categoria == getParam('categoria'));

    if(!listaPecas){
      window.location.href = 'index.html'
    }
  
    pecaJSON = listaPecas.items.find(x => x.id == getParam('id'));

    if(!pecaJSON){
      window.location.href = 'index.html'
    }


    var listFotos = [];

    for(var i = pecaJSON.qtdFotos; i != 0; i--){
      listFotos.push('FOTOS/'+getParam('categoria')+'/'+getParam('id')+'/acervo ('+i+').jpg')
    }

    listFotos = listFotos.reverse()
    
    var templateFotosCarroussel = `<div class="carousel-item [FLAGACTIVE]"><img class="d-block w-100 gallery-item" src="[URLFOTO]" alt="Foto"></div>`
    var templateFotosBook = `<div class="col-md-4 col-sm-12"><img class="d-block w-100 gallery-item" src="[URLFOTO]" alt="Second slide"></div>`;

    var conteudoCarrossel = document.getElementById('conteudoCarrossel');
    var conteudoBook = document.getElementById('conteudoBook');


    listFotos.forEach((item, index) => {
      conteudoCarrossel.innerHTML += templateFotosCarroussel.replace('[URLFOTO]', item).replace('[FLAGACTIVE]', index == 0 ? 'active': '')
      conteudoBook.innerHTML += templateFotosBook.replace('[URLFOTO]', item)
    })


    var areaInfo = document.getElementById('areaInfo');

    areaInfo.innerHTML = areaInfo.innerHTML.replace('[NOMEPECA]', pecaJSON.nomePeca).replace('[NOMECIENTIFICO]', pecaJSON.nomeCientifico).replace('[DESCRICAO]', pecaJSON.descricao)

    debugger;
    imagesList = document.querySelectorAll('.gallery-item');
    imagesList.forEach((image, index) => {
      image.addEventListener('click', () => {
        openLightbox(index);
      });
    });


  })
  .catch(error => { console.error('Erro ao carregar o arquivo JSON:', error) });
}



let currentIndex = 0;

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
    currentIndex = imagesList.length - 1;
  } else if (currentIndex >= imagesList.length) {
    currentIndex = 0;
  }
  updateLightboxImage();
}

function updateLightboxImage() {
  const imageSrc = imagesList[currentIndex].getAttribute('src');
  lightboxImg.setAttribute('src', imageSrc);
}

window.onload = function(){
  carregaJSON();
  
  
  
}

