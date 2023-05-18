// 비주얼 영역
var screenSize, screenHeight;

function screen_size(){
    screenSize = $(window).width(); //스크린의 너비
    screenHeight = $(window).height();  //스크린의 높이

    $("#content").css('margin-top',screenHeight);
    
    if( screenSize > 640){
        $("#imgBG").attr('src','./images/sub2_images/subvisual1.jpg'); //큰이미지 이름 변경
    }if(screenSize <= 640){
        $("#imgBG").attr('src','./images/sub2_images/subvisual2.jpg'); //작은 이미지 
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


//place_con1 영역
function screen_size2(){
    screenSize = $(window).width(); //스크린의 너비

if(screenSize > 640){
$('.place_con1 li:eq(0) .inner_con').on('mouseenter',function(){
   $('.place_con1 li:eq(0) .gradient').css('background', 'linear-gradient(90deg, rgba(46,114,171,0.1) 20%, rgba(46,114,171,1) 50%)');
      });
$('.place_con1 li:eq(0) .inner_con').on('mouseleave',function(){
   $('.place_con1 li:eq(0) .gradient').css('background', 'linear-gradient(90deg, rgba(46,114,171,0.5) 20%, rgba(46,114,171,1) 50%)');
      });
//ㄱ모바일로 줄여서 호버해제됐다가 다시 늘려서 pc사이즈로왔을때 적용해라!(리사이징할때 계속~)
// 또는 초기값
$('.place_con1 li:eq(0) .gradient1').css('background','linear-gradient(90deg, rgba(46,114,171,0.5) 20%, rgba(46,114,171,1) 50%)');


$('.place_con1 li:eq(1) .inner_con').on('mouseenter',function(){
    $('.place_con1 li:eq(1) .gradient').css('background', 'linear-gradient(270deg, rgba(80,184,160,0.1) 20%, rgba(80,184,160,1) 50%)');
      })
$('.place_con1 li:eq(1) .inner_con').on('mouseleave',function(){
    $('.place_con1 li:eq(1) .gradient').css('background', 'linear-gradient(270deg, rgba(80,184,160,0.5) 20%, rgba(80,184,160,1) 50%)');
      });
//ㄱ모바일로 줄여서 호버해제됐다가 다시 늘려서 pc사이즈로왔을때 적용해라!(리사이징할때 계속~)
// 또는 초기값
$('.place_con1 li:eq(1) .gradient2').css('background','linear-gradient(270deg, rgba(80,184,160,0.5) 20%, rgba(80,184,160,1) 50%)');


$('.place_con1 li:eq(2) .inner_con').on('mouseenter',function(){
    $('.place_con1 li:eq(2) .gradient').css('background', 'linear-gradient(90deg, rgba(233,70,78,0.1) 20%, rgba(233,70,78,1) 50%)');
      })
$('.place_con1 li:eq(2) .inner_con').on('mouseleave',function(){
    $('.place_con1 li:eq(2) .gradient').css('background', 'linear-gradient(90deg, rgba(233,70,78,0.5) 20%, rgba(233,70,78,1) 50%)');
      });
//ㄱ모바일로 줄여서 호버해제됐다가 다시 늘려서 pc사이즈로왔을때 적용해라!(리사이징할때 계속~)
// 또는 초기값
$('.place_con1 li:eq(2) .gradient3').css('background','linear-gradient(90deg, rgba(233,70,78,0.5) 20%, rgba(233,70,78,1) 50%)');


$('.place_con1 li:eq(3) .inner_con').on('mouseenter',function(){
    $('.place_con1 li:eq(3) .gradient').css('background', 'linear-gradient(270deg, rgba(253,250,120,0.1) 20%, rgba(253,250,120,1) 50%)');
      })
$('.place_con1 li:eq(3) .inner_con').on('mouseleave',function(){
    $('.place_con1 li:eq(3) .gradient').css('background', 'linear-gradient(270deg, rgba(253,250,120,0.5) 20%, rgba(253,250,120,1) 50%)');
      });
//ㄱ모바일로 줄여서 호버해제됐다가 다시 늘려서 pc사이즈로왔을때 적용해라!(리사이징할때 계속~)
// 또는 초기값
$('.place_con1 li:eq(3) .gradient4').css('background','linear-gradient(270deg, rgba(253,250,120,0.5) 20%, rgba(253,250,120,1) 50%)');

}else{   //모바일에서는 호버효과 해제해라!
    $('.place_con1 li:eq(0) .inner_con').off('mouseenter');     
    $('.place_con1 li:eq(0) .inner_con').off('mouseleave');
    $('.place_con1 li:eq(0) .gradient1').css('background','linear-gradient(180deg, rgba(46,114,171,0.1) 20%, rgba(46,114,171,1) 60%)');

    $('.place_con1 li:eq(1) .inner_con').off('mouseenter');     
    $('.place_con1 li:eq(1) .inner_con').off('mouseleave');
    $('.place_con1 li:eq(1) .gradient2').css('background','linear-gradient(180deg, rgba(80,184,160,0.1) 20%, rgba(80,184,160,1) 60%)');

    $('.place_con1 li:eq(2) .inner_con').off('mouseenter');     
    $('.place_con1 li:eq(2) .inner_con').off('mouseleave');
    $('.place_con1 li:eq(2) .gradient3').css('background','linear-gradient(180deg, rgba(233,70,78,0.1) 20%, rgba(233,70,78,1) 60%)');

    $('.place_con1 li:eq(3) .inner_con').off('mouseenter');     
    $('.place_con1 li:eq(3) .inner_con').off('mouseleave');
    $('.place_con1 li:eq(3) .gradient4').css('background','linear-gradient(180deg, rgba(253,250,120,0.1) 20%, rgba(253,250,120,1) 60%)');



};


};

screen_size2();

$(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
    screen_size2();
});