
$(function(){
    var $document = $(document);
    var $wrap = $('.wrapPage');
    var $btn = $('.navBtn ul li');
    var $down = $("#down_arrow");
    var $part = $('.page');
    var index = 0;
    var Time = new Date();
    var maxPartIndex = $('.page').length-1;
    var bodyHeight = $('body').height();

    $('.main').addClass('on'); //为了一开始加载的时候就有动画

    //当窗口被调整时
    $(window).resize(function(){
        bodyHeight = $('body').height();
        $wrap.css({'top':-index*bodyHeight});
    })


    //当鼠标滚动时
    $document.mousewheel(function(e,r){

            $part.eq(index).removeClass('on');

            if(new Date()-Time>1000){

                Time = new Date();
                r<0?index++:index--;

            if(index<0){

                index = 0;

            }

            if(index>maxPartIndex){

                index = maxPartIndex;

            }

            roll();
        }
    })

    //当按钮被点击时
    $btn.click(function(){

        $part.eq(index).removeClass('on');

        var $this = $(this);
        index = $this.index();

        roll();
    })
    //向下箭头
    $down.click(function(){
        $part.eq(index).removeClass('on');
        var $this = $(this);
        index = $this.index();
        roll();
    })

    //滚动封装
    function roll(){

        $btn.eq(index).addClass('on').siblings().removeClass('on');
        $wrap.animate({'top':-index*bodyHeight},1000,function(){

            $part.eq(index).addClass('on').siblings().removeClass('on');
        })

        // 头部导航
        var lineL = $(".nav_content li.on").position().top;
        $(".nav_content .line").animate({top:lineL},200);
    }

    // 头部导航
     $(".nav_content li").mouseover(function(){
        var mlineL = $(this).position().top;
        var lineW = $(".nav_content li").width();
        $(".nav_content .line").stop(true).animate({width:lineW,top:mlineL},400);
    });
    $(".header_nav").mouseleave(function(){
        var lineL = $(".nav_content li.on").position().top;
        $(".nav_content .line").css("top",lineL);
    });

    $(".logo").click(function(){
        $(".nav_content").toggleClass('down');
        var isDown = $(".nav_content").hasClass('down');
        if(isDown){
            $(".nav_content.down").animate({height:"420px",opacity:1},1000);
        }else{
            $(".nav_content").animate({height:0,opacity:0},1000);
        }
    });

    // 使首页动画上下居中
    // $(".box_wrap,.special_wrap,.find_wrap,.project_wrap,.skill_wrap,.contact_wrap").animate({top: (bodyHeight-350)/2},400);
    $(".box_wrap,.special_wrap,.find_wrap,.project_wrap,.skill_wrap,.contact_wrap").css("top",(bodyHeight-350)/2);

    // 首页逐字显示
    playWords();
    function playWords(){
        var i = 0;
        var str = "Web大前端开发。因为热爱，所以选择。";
        var len = str.length;
        var html = "";
        var timerWords = setInterval(function(){
            if(i<=len){
                var word = str.substring(i,i+1);
                html+=word;
                $("#words").html(html);
                i++;
            }else{
               clearInterval(timerWords);
            }
        },500);
    }
    // 音乐鼠标的旋转和停止控制
    $(".icon_music").hover(function(){
       $(this).removeClass('infinite');
    },function(){
        $(this).addClass('infinite');
    });


})