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
        sortList();
    })
    
})($);
function sortList() {
    var arrData = [{
        "sort" : "T恤",
    }, {
        "sort" : "休闲裤",
    }, {
        "sort" : "打底裤",
    }, {
        "sort" : "正装裤",
    }, {
        "sort" : "西装",
    }, {
        "sort" : "短外套",
    }, {
        "sort" : "风衣",
    }, {
        "sort" : "休闲裤",
    }, {
        "sort" : "羽绒服",
    }];

    var listData = [];
    for (var i = 0,
        len = arrData.length; i < len; i++) {
        var list = {
            title : arrData[i].sort
        }
        listData.push(list);

    }
    var lv1 = appcan.listview({
        selector : $("#sortList"),
        type : "thinLine",
        hasIcon : false,
        hasAngle : true,
        hasSubTitle : false,
        multiLine : 1,
        hasCheckbox : false,
        align : 'left'
    });
    lv1.set(listData);
    lv1.on('click', function(ele, context, obj, subobj) {
        appcan.openWinWithUrl('goodsList','goodsList.html',10,256);
    })
}