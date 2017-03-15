$(function(){
    initSlider();
});

function initSlider() {
    $("#slider").slidesjs({

        play: {
            active: true,
            auto: true,
            interval: 4000,
            swap: true,
            pauseOnHover: true,
            restartDelay: 2500
        }

    });
}