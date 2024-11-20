window.addEventListener("load",function(){

    const station1 = new Swiper('.station1', {
        // Optional parameters
        // direction: 'vertical',
        autoHeight:true,
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable:true
        },
        slidesPerView:1,
        autoplay:{
            delay:3000
        },
        speed:1000,
        // scrollbar: {
        //     el: ".swiper-scrollbar",
        //     hide: false,
        // },
        
    });

    const station2 = new Swiper('.station2', {
        // Optional parameters
        // direction: 'vertical',
        autoHeight:true,
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        slidesPerView:1,
        autoplay:{
            delay:3000
        },
        speed:1000
    });

    const station3 = new Swiper(".station3",{
        loop:true,
        autoplay:true,
        
    })

    const station4 = new Swiper(".station4",{
        loop:true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
    })

    station3.on('slideChange', function () {
        // console.log(station3.realIndex);
        station4.slideToLoop(station3.realIndex)
    });

    

})