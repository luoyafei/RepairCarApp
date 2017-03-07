(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {
        appcan.window.close(-1);
    });
    appcan.button("#nav-right", "btn-act",
    function() {});
    appcan.button(".btn", "ani-act", 
    function() {
    });
    appcan.ready(function() {
        $.scrollbox($("body")).on("releaseToReload",
        function() { //After Release or call reload function,we reset the bounce
            $("#ScrollContent").trigger("reload", this);
        }).on("onReloading",
        function(a) { //if onreloading status, drag will trigger this event
        }).on("dragToReload",
        function() { //drag over 30% of bounce height,will trigger this event
        }).on("draging",
        function(status) { //on draging, this event will be triggered.
        }).on("release",
        function() { //on draging, this event will be triggered.
        }).on("scrollbottom",
        function() { //on scroll bottom,this event will be triggered.you should get data from server
            $("#ScrollContent").trigger("more", this);
        }).hide();
    })
    var lv1 = appcan.listview({
        selector : "#listview",
        type : "thickLine",
        hasIcon : true,
        hasAngle : false,
        hasSubTitle : true,
        multiLine : 1
    });
    lv1.set([{
        icon : 'orderAll/css/myImg/img1.png',
        title : '情人节礼物礼物礼物怡吻手工松露巧克力...',
        note : '分类：大礼包装',
        subTitle : '￥19.5',
        subNote : 'x1'
    }]);
    $("#search0").on("click",function(){
        var height = $(this).height();
        $(this).addClass("uhide");
        $("#search1").removeClass("uhide");
        $("#search1").find("input").focus();
    });
})($);