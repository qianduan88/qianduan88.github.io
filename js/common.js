$(function(){
    //静态加载
    $("#head").load('public/header.html');
    $("#footer").load('public/footer.html');

    $(".headerRight a:contains('登录')").click(function(){
        $(".mask").show();
        $(".loginBox").show();
    })
    
    $(".close").click(function(){
        $(".mask").hide();
        $(".loginBox").hide();
    })


})

