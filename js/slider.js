const IMG_PATH = "./asset/img/"
const IMG_NAMES = ["angry_cat.jpg","bear.jpg","cat.jpg","dog.jpg","funny_dog.jpg","lion.jpg","panda.jpg","tiger.jpg"] // Предположим, что этот массив мы получили ответом от сервера на GET запрос. Он хранит назвния файлов, которые должны быть в слайдере

function init() {
    img = document.querySelector(".slider-img");
    img.setAttribute("src", IMG_PATH+IMG_NAMES[0]);
// Показываем картинки после загрузки страницы
    document.querySelector("#firstImg").setAttribute("src", IMG_PATH+IMG_NAMES[IMG_NAMES.length-2]);
    document.querySelector("#secondImg").setAttribute("src", IMG_PATH+IMG_NAMES[IMG_NAMES.length-1]);
    document.querySelector("#thirdImg").setAttribute("src", IMG_PATH+IMG_NAMES[0]);
    document.querySelector("#forthImg").setAttribute("src", IMG_PATH+IMG_NAMES[1]);
    document.querySelector("#fifthImg").setAttribute("src", IMG_PATH+IMG_NAMES[2]);
// Добавляем обработчики на клик по стрелкам и по нажатию Enter при наведении фокуса на стрелки
    document.querySelector(".next").addEventListener('click', ()=>{showNextImg(getCurrImg())});
    document.querySelector(".prev").addEventListener('click', ()=>{showPrevImg(getCurrImg())});
    document.querySelector(".next").addEventListener('keydown', (e)=>{
        if (e.code == "Enter"){
            showNextImg(getCurrImg());
        }
    });
    document.querySelector(".prev").addEventListener('keydown', (e)=>{
        if (e.code == "Enter"){
            showPrevImg(getCurrImg());
        }
    });

// Добавляем обработчики на клик по картинке из галереи (под слайдером)
    document.querySelector("#firstImg").addEventListener('click', (e)=>{cb(e)});
    document.querySelector("#secondImg").addEventListener('click',(e)=>{cb(e)});
    document.querySelector("#thirdImg").addEventListener('click', (e)=>{cb(e)});
    document.querySelector("#forthImg").addEventListener('click', (e)=>{cb(e)});
    document.querySelector("#fifthImg").addEventListener('click', (e)=>{cb(e)});
// Добавляем обработчики на нажатие Enter при наведении фокуса на картинку из галереи
    document.querySelector("#firstImg").addEventListener('keydown', (e)=>{
        if (e.code == "Enter"){
            cb(e);
        }
    });
    document.querySelector("#secondImg").addEventListener('keydown',(e)=>{
        if (e.code == "Enter"){
            cb(e);
        }
    });
    document.querySelector("#thirdImg").addEventListener('keydown', (e)=>{
        if (e.code == "Enter"){
            cb(e);
        }
    });
    document.querySelector("#forthImg").addEventListener('keydown', (e)=>{
        if (e.code == "Enter"){
            cb(e);
        }
    });
    document.querySelector("#fifthImg").addEventListener('keydown', (e)=>{
        if (e.code == "Enter"){
            cb(e);
        }
    });
}

function cb(e){ // Коллбэк по клику на картинку из галереи
    let curImg = e.target.getAttribute("src"); // Ловим путь к фалу на который кликнули
    let curImgFile = curImg.slice(curImg.lastIndexOf("/")+1); // Получаем строку с названием и расширением файла картинки
    let img = document.querySelector(".slider-img"); // Получаем объект текущей картинки слайдера
    easyAnimation(img); // Плавно делаем полученную картинку видимой
    img.setAttribute("src", curImg); // Показываем в слайдере кликнутую в галереи картинку
    showGallery(curImgFile); // Показываем обновленную галерею
}

function getCurrImg(){ // Функция получения строки с названием файла текущей картинки в слайдере
    curImg = document.querySelector(".slider-img").getAttribute("src");
    curImgFile = curImg.slice(curImg.lastIndexOf("/")+1);
    return curImgFile;
}

function getNextImg(curImgFile){ // Функция получения строки с названием файла следующей картинки в слайдере
    nextImg = IMG_NAMES[(IMG_NAMES.indexOf(curImgFile)+1) % IMG_NAMES.length];
    return nextImg;
}

function showNextImg(curImgFile){ // Функция, которая отображает следующую картинку в слайдере 
    nextImg = getNextImg(curImgFile);
    img = document.querySelector(".slider-img");  
    easyAnimation(img);
    img.setAttribute("src", IMG_PATH + nextImg);
    showGallery(nextImg);
}

function getPrevImg(curImgFile){
    IMG_NAMES.indexOf(curImgFile)-1 >=0 ? prevImg = IMG_NAMES[(IMG_NAMES.indexOf(curImgFile)-1) % IMG_NAMES.length]: prevImg = IMG_NAMES[IMG_NAMES.length-1];
    return prevImg;
}

function showPrevImg(curImgFile){
    prevImg = getPrevImg(curImgFile);
    img = document.querySelector(".slider-img");
    easyAnimation(img);
    img.setAttribute("src", IMG_PATH + prevImg);
    showGallery(prevImg);
}

function showGallery(curImgFile){
    let prevImg = getPrevImg(curImgFile);
    let prePreImg = getPrevImg(prevImg);
    let nextImg = getNextImg(curImgFile);
    let nextNextImg = getNextImg(nextImg);
    document.querySelector("#firstImg").setAttribute("src", IMG_PATH+prePreImg);
    document.querySelector("#secondImg").setAttribute("src", IMG_PATH+prevImg);
    document.querySelector("#thirdImg").setAttribute("src", IMG_PATH+curImgFile);
    document.querySelector("#forthImg").setAttribute("src", IMG_PATH+nextImg);
    document.querySelector("#fifthImg").setAttribute("src", IMG_PATH+nextNextImg);
}


function easyAnimation(element){
    let i=0;
    // document.querySelector(".next").style.display = "none"; // Прячем стрелки, чтобы на них не нажимали, пока не кончится анимация (иначе мерцает - хз почему??)
    // document.querySelector(".prev").style.display = "none";
    setInterval(() => {
        if (i<1) {
            i+=0.01;
            element.style.opacity = i;
        } 
    }, 5)
    // setTimeout(() => {
    //     document.querySelector(".next").style.display = "flex"; // Вновь показываем стрелки, после анимации
    //     document.querySelector(".prev").style.display = "flex";
    // }, 900); // 900 -задержка, методом подбора
}

window.onload = init();