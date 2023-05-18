//공통 비주얼스크롤아이콘 영역
$('.down').click(function(){
  screenHeight = $(window).height();
  $('html,body').animate({'scrollTop':screenHeight}, 1000);
});


//글로벌네비게이션 영역
var smh=$('.videoBox').height();  //비주얼 이미지의 높이를 리턴한다   900px

   
   //스크롤의 위치변화가 생기면 발생하는 이벤트 -> scroll              
   //$(window).on('scroll',function(){//실행코드});
   $(window).on('scroll',function(){//스크롤의 거리가 발생하면
        var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
        //console.log(scroll);

        if(scroll>smh-100){//스크롤300까지 내리면
            $('#headerArea').css('background','rgba(0,0,0,.8');

            
        }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
            $('#headerArea').css('background','none');
           };
        
     });


     
     var screenSize = $(window).width();
     var documentHeight =  $(document).height();
     if(screenSize>1024){
      $("#gnb").css('height','auto');
     }else{
      $("#gnb").css('height',documentHeight);
     }
     
     
    $(".btn").click(function(e) {
      e.preventDefault();

     $("#gnb").fadeIn('slow');
     $(this).fadeOut('fast');
    });
    
    $(".close").click(function(e) {
      e.preventDefault();

      $("#gnb").fadeOut('fast');
      $(".btn").fadeIn('slow');
    });
    
    
    var current=0;         //햄버거는 css로 작동시킨거고 햄버거누르면 네비쳐나오는건 스크립트로처리한거고 current는 브라우저해상도 늘리거나 줄일때 이하나 이상일때 잡아주는거
    $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
       screenSize = $(window).width();  
       documentHeight =  $(document).height();

       if( screenSize > 1024){      //브라우저를 640이상으로 계속 늘리고있을때마다 계속 적용됌 네비나오고나오고나오고~계속
        current=1;
         $("#gnb").show();
         $('.btn').hide();
        
         $("#gnb").css('height','auto');
       }
       if(current==1 && screenSize <= 1024){  //한번만 커졌다 작아질때 네비가 사라져라 current==1(640이상)에서 640이하로 줄어들때 단한번!
          $("#gnb").hide(); //그후론 햄버거눌러서 열린네비가 켜져야하니까 640이상에서 옆으로 플롯 나열됀 네비를 한번만 사라져라한거임(640이하로갈땐 햄버거로 변하고 네비가 또열려야하니까!)
          $('.btn').show();

          current=0;     //그다음번에 계속 줄어들때는 아무것도 적용하지마라
      
          $("#gnb").css('height',documentHeight);
         
        }         // 0을 줬으니까 current==1 && screenSize <= 640 커런트는1이라서 if문안에있는거 적용안됌
     }); 



    //  TOP 이동
     $('.movetop').click(function(e){
        e.preventDefault();   //a태그 니까 꼭 사용
         //상단으로 스르륵 이동합니다.
        $("html,body").stop().animate({"scrollTop":0},1000);
        //$("html,body").stop().animate({"scrollTop":100},1000); //해당 높이로 이동
     }); 