// 비주얼 영역
var screenSize, screenHeight;

function screen_size(){
    screenSize = $(window).width(); //스크린의 너비
    screenHeight = $(window).height();  //스크린의 높이

    $("#content").css('margin-top',screenHeight);
    
    if( screenSize > 640){
        $("#imgBG").attr('src','./images/sub4_images/subvisual1.jpg'); //큰이미지 이름 변경
    }if(screenSize <= 640){
        $("#imgBG").attr('src','./images/sub4_images/subvisual2.jpg'); //작은 이미지 
    }
}

screen_size();  //최초 실행시 호출

$(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
    screen_size();
}); 

$('.down').click(function(){
    screenHeight = $(window).height();
    $('html,body').animate({'scrollTop':screenHeight}, 1000);
});

$(window).on('load', function() {
   $('.ball').animate({left: '65%'}, 2000, function() {
    $('.ball').css('opacity', '0');
   });
   $('.ball').css('opacity', '1');
})  