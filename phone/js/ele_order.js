(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {
        appcan.window.close(-1);
    });
    appcan.button("#nav-right", "btn-act",
    function() {});

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
        selector : "#listview1",
        type : "thinLine",
        hasIcon : false,
        hasAngle : false,
        hasControl : true,
    });
    lv1.set([{
        title : "匿名购买",
        "switchBtn" : {
            value : false,
            mini : true
        }
    }, {
        title : "可用AppCan积分抵用0.4元",
        "switchBtn" : {
            value : true,
            mini : true
        }
    }]);

    lv1.on("switch:change", function(ele, obj) {
        // lv1.updateItem(ele,"title","Switch:"+obj.switchBtn.value);
    })
})($);