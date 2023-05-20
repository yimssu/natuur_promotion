var lastScrollTop = 0;

window.addEventListener('DOMContentLoaded', function () {
    var scrollTop = $(this).scrollTop();
    
    setTimeout(() => {
        $('#section01 .title01_01').addClass('on');
    },100)
  
    setTimeout(() => {
        $('#section01 .title02_01').addClass('on');
    },600)
    setTimeout(() => {
         $('#section01 .title03_01').addClass('on');
    },600)
    setTimeout(() => {
        $('#section01 .title04_01').addClass('on');
   },700)
 

   $("#container").each(function () {
    var contentIndex = $(this).attr("id");
    if(scrollTop >= $(this).offset().top) {
        $(".scroll_03 a").removeClass("on");
        $(".scroll_03 a[href=#"+contentIndex+"]").addClass("on");
    }
})


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        // $('.posNum').html(scrollTop)

        if(scrollTop >= 82){
            $('.bus_01').addClass('on');
        }
        if(scrollTop >= 400){
            $('.human02_01').addClass('on');
        }
        if(scrollTop >= 780){
            $('.human_01').addClass('on');
        }
        if(scrollTop >= 1580){
            $('.icecream01_01').addClass('on');
        }
        if(scrollTop >= 1700){
            $('.icecream02_01').addClass('on');
        }
        if(scrollTop >= 1640){
            $('.text02_01').addClass('on');
        }
        if(scrollTop >= 1940){
            $('.board02_01').addClass('on');
        }
        if(scrollTop >= 2800){
            $('.title02_02').addClass('on');
        }
        if(scrollTop >= 3050){
            $('.board01_02').addClass('on');
        }
        if(scrollTop >= 3200){
            $('.board03_02').addClass('on');
        }
        if(scrollTop >= 3700){
            $('.board02_02').addClass('on');
        }
        if(scrollTop >= 3150){
            $('.title03_02').addClass('on');
        }
        if(scrollTop >= 4740){
            $('.title02_03').addClass('on');
        }
        if(scrollTop >= 4840){
            $('.typo01_03').addClass('on');
        }
        if(scrollTop >= 5050){
            $('.typo02_03').addClass('on');
        }
        if(scrollTop >= 5140){
            $('.typo03_03').addClass('on');
        }
        if(scrollTop >= 4777){
            $('.background02_03').addClass('on');
        }
        if(scrollTop >= 4900){
            $('.icecream02_03').addClass('on');
        }
        if(scrollTop >= 5000){
            $('.icecream03_03').addClass('on');
        }

        if(scrollTop >= 5630){
            $('.title02_04').addClass('on');
        }
        if(scrollTop >= 5990){
            $('.mockup01_04').addClass('on');
        }
        if(scrollTop >= 5990){
            $('.human_04').addClass('on');
        }
        if(scrollTop >= 7280){
            $('.text01_04').addClass('on');
        }
        if(scrollTop >= 8000){
            $('.mockup03_04').addClass('on');
        }
        if(scrollTop >= 8444){
            $('.text02_04').addClass('on');
        }   
        if(scrollTop >= 9010){
            $('.mockup04_04').addClass('on');
        }  
        if(scrollTop >= 9060){
            $('.human02_04').addClass('on');
        }  

        if(scrollTop >= 9910){
            $('.bus_05').addClass('on');
        }  
        if(scrollTop >= 10649){
            $('.mockup01_05').addClass('on');
        }  
        if(scrollTop >= 10900){
            $('.mockup02_05').addClass('on');
        }  
        if(scrollTop >= 11850){
            $('.text_05').addClass('on');
        }  
        if(scrollTop >= 13200){
            $('.human01_05').addClass('on');
        }  
        if(scrollTop >= 13700){
            $('.human02_05').addClass('on');
        }  

        if(scrollTop >= 13700){
            $('.footer_title01_05').addClass('on');
        }  
        if(scrollTop >= 13700){
            $('.footer_title02_05').addClass('on');
        }  
        if(scrollTop >= 13800){
            $('.footer_star_05').addClass('on');
        }  

        if(scrollTop >= 100) { // 숫자에 따라 아래로 스크롤 했을 때 사라지는 영역의 크기가 바뀝니다.
            if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) { /* &&: AND, 두 값이 모두 참이어야 값이 출력 */
                /* 화면에 나오지 않을 때: top값을 마이너스로 요소가 보이지 않게 사용해야함 */
                $("#header").css("top","-100px");
            } else {
                $("#header").css("top","0px");
            }
    
            lastScrollTop = scrollTop;
        } 
    




    });



    /*  slide,click event section */





















})


