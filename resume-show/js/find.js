$(function(){
    var arr = [
        "magic","openDownLeft","openDownRight","openUpLeft","openUpRight","openDownLeftRetourn","openDownRightRetourn","openUpLeftRetourn","openUpRightRetourn","openDownLeftOut","openUpRightOut","perspectiveDown","perspectiveLeft","perspectiveRight","perspectiveUp","perspectiveDownRetourn","perspectiveLeftRetourn","perspectiveRightRetourn","perspectiveUpRetourn","puffIn","puffOut","rotateLeft","rotateRight","rotateUp","slideDown","slideLeft","slideRight ","slideUp","slideDownRetourn","slideLeftRetourn","slideRightRetourn","slideUpRetourn","swap","twisterInDown","twisterInUp","vanishIn","vanishOut","swashOut","swashIn","foolishOut","foolishIn","holeOut","tinRightOut","tinLeftOut","tinUpOut","tinDownOut","tinRightIn","tinLeftIn","tinUpIn","tinDownIn","bombRightOut","bombLeftOut","boingInUp","boingOutDown","spaceOutUp","spaceOutRight","spaceOutDown","spaceOutLeft","spaceInUp","spaceInRight","spaceInDown","spaceInLeft"
        ];
    createSpan();
    // 创建动画标签
    function createSpan(){
        var spanHtml =  "<span></span>"
        var len = arr.length;
        for(var i=0;i<len;i++){
            $("#isAnimation").append(spanHtml);
            $("#isAnimation").find("span").eq(i).text(arr[i]);
        };
    }
    // 执行动画
    $("#isAnimation").find("span").click(function(){
        var i = $(this).index();
        $(this).addClass("magictime"+" "+arr[i])
        setTimeout(function(){
            $("#isAnimation").find("span").removeClass("magictime "+arr[i]);
        },2000);
    });
});