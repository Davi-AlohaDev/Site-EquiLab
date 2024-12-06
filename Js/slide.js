var radio = document.querySelector('.manual-btn');
var cont = 1;


document.getElementById('radio1').checked =  true 

setInterval(() => {
    proxImg()
}, 6000)

function proxImg(){
    cont ++

    if(cont > 4){
        cont = 1
    }
    document.getElementById('radio'+cont).checked = true 
}

var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    keyboard: true,
});