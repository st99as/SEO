let otstyp = 0;
const what_our_clients_say_slider = document.querySelector(".what_our_clients_say_slider_card");
document.querySelector(".left_arrow_img").addEventListener("click",function(){
    otstyp =  otstyp + 375 ;
    if (otstyp < -750){
        otstyp = 0;
    }
    what_our_clients_say_slider_card.style.left = otstyp + "px";
})