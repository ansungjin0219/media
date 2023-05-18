//about 영역 
function screenW(){     
if(screenSize>1280){
    $('.aboutcon2_img div:eq(0) img').attr('src','./images/con1_03.jpg');
    $('.aboutcon2_img div:eq(1) img').attr('src','./images/con1_04.jpg');
    $('.aboutcon2_img div:eq(3) img').attr('src','./images/con1_06.jpg');
}else if(screenSize>1024){
    
}else if(screenSize>768){
    $('.aboutcon2_img div:eq(0) img').attr('src','./images/con1_08.jpg');
    $('.aboutcon2_img div:eq(1) img').attr('src','./images/con1_09.jpg');
    $('.aboutcon2_img div:eq(3) img').attr('src','./images/con1_10.jpg');
}else if(screenSize>640){
    
}else{
    
}
}

screenW();  //함수호출    
    
$(window).resize(function(){ 
    screenSize = $(window).width(); 
    
    screenW();//함수호출
});    