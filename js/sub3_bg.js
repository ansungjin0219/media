// 비주얼 영역
var screenSize, screenHeight;

function screen_size(){
    screenSize = $(window).width(); //스크린의 너비
    screenHeight = $(window).height();  //스크린의 높이

    $("#content").css('margin-top',screenHeight);
    
    if( screenSize > 640){
        $("#imgBG").attr('src','./images/sub3_images/subvisual1.jpg'); //큰이미지 이름 변경
    }if(screenSize <= 640){
        $("#imgBG").attr('src','./images/sub3_images/subvisual2.jpg'); //작은 이미지 
    };

};

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

// culture_nav 영역(640이상일때) 
$('.oldcars').show();
$('.salsa, .caribbean, .mojito').hide();
$('.culture_nav li:eq(0) a').addClass('tab_a1');
var ind=0;
$('.culture_nav li').click(function(e){
    e.preventDefault();
    ind = $(this).index();
    console.log(ind);
    $("#content section").fadeOut('fast');
    $("#content section:eq("+ind+")").fadeIn();
    $('.culture_nav li a').removeClass();
    $(this).find('a').addClass('tab_a1');
});



// culture_nav 영역(640이하일때) 
function screen_size2(){
    screenSize = $(window).width();


var nav_on = false

$('.culture_navbox>a').click(function(e) {
    e.preventDefault();

    //$('.culture_nav li a').removeClass();

    if (nav_on == true) {
        $('.culture_nav').slideUp('fast');	
        $(this).find('span').text('expand_more');
        nav_on=false;

    } else {
        $('.culture_nav').slideDown('fast');
        $(this).find('span').text('expand_less')
        nav_on=true;
    }
});


var ins= ['Old cars', 'Salsa', 'Caribbean', 'Mojito']

$('.culture_nav li a').on('click',function(e){
    e.preventDefault();
    var ind = $(this).index('.culture_nav li a');
    //$('.culture_nav li a').removeClass();

//    $('section').hide();
//    var ind = $(this).index();
//    $('section:eq('+ind+')').show();
   $('.culture_navbox>a strong').text(ins[ind]);

   $('.culture_nav').slideUp('fast');
   $('.culture_navbox>a').find('span').text('expand_more');
   nav_on=false;
});

};



   
    if(screenSize <= 640){
         screen_size2();  //최초함수호출
        
   }

   var onoff2=false; 
$(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
    
    screenSize = $(window).width();
   
    if(screenSize <= 640 && onoff2==false){
        screen_size2();
         $('.culture_nav').hide();
         //$('.culture_nav li a').removeClass();
         onoff2=true;
         
   }else if(screenSize > 640){
        $('.culture_nav').show();
       // $('.culture_nav li a:eq('+ind+')').addClass('tab_a1');
        $('.culture_nav li a').off('click');
        onoff2=false;
    
   };
});