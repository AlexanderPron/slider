const IMG_PATH = "./asset/img/"
const IMG_NAMES = ["angry_cat.jpg","bear.jpg","cat.jpg","dog.jpg","funny_dog.jpg","lion.jpg","panda.jpg","tiger.jpg"] // Предположим, что этот массив мы получили ответом от сервера на GET запрос. Он хранит назвния файлов, которые должны быть в слайдере

function init() {
    img = document.getElementsByClassName("slider-img")[0];
    img.setAttribute("src", IMG_PATH+IMG_NAMES[0]);
  }

function getNextImg(){
    curImg = document.getElementsByClassName("slider-img")[0].getAttribute("src");
    curImgFile = curImg.slice(curImg.lastIndexOf("/")+1);
    nextImg = IMG_NAMES[(IMG_NAMES.indexOf(curImgFile)+1) % IMG_NAMES.length]
    return nextImg;
}
function showNextImg(){
    nextImg = getNextImg();
    img = document.getElementsByClassName("slider-img")[0];
    img.setAttribute("src", IMG_PATH + nextImg);
}

function getPrevImg(){
    curImg = document.getElementsByClassName("slider-img")[0].getAttribute("src");
    curImgFile = curImg.slice(curImg.lastIndexOf("/")+1);
    IMG_NAMES.indexOf(curImgFile)-1 >=0 ? prevImg = IMG_NAMES[(IMG_NAMES.indexOf(curImgFile)-1) % IMG_NAMES.length]: prevImg = IMG_NAMES[IMG_NAMES.length-1];
    return prevImg;
}
function showPrevImg(){
    prevImg = getPrevImg();
    img = document.getElementsByClassName("slider-img")[0];
    img.setAttribute("src", IMG_PATH + prevImg);
}
window.onload = init();