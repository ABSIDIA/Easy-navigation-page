
$(document).ready(function() {
    //判断窗口大小，添加输入框自动完成
    var wid = $("body").width();
    if (wid < 640) {
        $(".wd").attr('autocomplete', 'off');
    }else{
    	$(".wd").focus();
    }
    //按钮
    $(".sou li").click(function() {
        var dt = $(this).attr('data-s');
        wd = $(".wd").val();
        if (dt == "biying") {
            if (wd == "" || wd == null) {
                window.location.href = "https://www.bing.com/?mkt=zh-CN";
            } else {
                $(".t").val("g");
                $("form").submit();
            }
        } else {
            if (wd == "" || wd == null) {
                window.location.href = "https://www.baidu.com/?tn=simple";
            } else {
                $(".t").val("b");
                $("form").submit();
            }

        }

    });
    //菜单点击
    $("#menu").click(function(event) {
        $(this).toggleClass('on');
        $(".list").toggleClass('closed');
        $(".mywth").toggleClass('hidden');
    });
    $("#content").click(function(event) {
        $(".on").removeClass('on');
        $(".list").addClass('closed');
        $(".mywth").removeClass('hidden');
    });
    $(".mywth").click(function(event) {
        var wt = $("body").width();
        if (wt < 750 || wt == 750) {
            //window.location.href = "https://tianqi.qq.com/";
            window.location.href = "https://apip.weatherdt.com/h5.html?id=pjICbzAo4C";
        }
    });
});

