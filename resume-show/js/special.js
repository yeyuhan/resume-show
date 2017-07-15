//$(function(){
    var imgLen = $(".s_pic img").length;
    var lastIndex = Math.floor(imgLen/2);//初始中间图片序列号
    var imgLeft = [];

    //为每个img添加初始命名
    for(var i=0;i<imgLen;i++){
        if(i<lastIndex){
            $(".s_pic img").eq(i).addClass("front");
        }else if(i>lastIndex){
            $(".s_pic img").eq(i).addClass("back");
        }else{
            $(".s_pic img").eq(i).addClass("now");
        };
    };

    //当前图片页面居中左右排开函数
    function mid(){
        var oWid = $(window).width();
        var mIndex = $(".now").index();
        $(".now").css("left",oWid/2-150+'px');
        for(var i=0;i<imgLen;i++){
            $(".s_pic img").eq(i).css("left",oWid/2-150-100*(mIndex-i)+'px');
            imgLeft[i] = parseInt($(".s_pic img").eq(i).css("left"));
        }
    };
    mid();
    $(window).resize(function(){mid()});

    $(".s_pic img").click(function(){
        var nowIndex = $(this).index();
        for(var i=0;i<imgLen;i++){
            imgLeft[i] -= 100*(nowIndex-lastIndex);
            $(".s_pic img").eq(i).css("left",imgLeft[i]);
        };
        for(var i=0;i<imgLen;i++){
            if(i<nowIndex){
                $(".s_pic img").eq(i).removeClass().addClass("front");
            }else if(i>nowIndex){
                $(".s_pic img").eq(i).removeClass().addClass("back");
            };
        };
        lastIndex = nowIndex;//替换当前图片序列号
        //当前图片添加类名now
        $(this).removeClass().addClass("now").siblings().removeClass("now");
    });
//})