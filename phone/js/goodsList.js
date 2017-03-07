(function($) {
    var left = "0%";
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
        var plat = uexWidgetOne.getPlatform();
        //如果是android平台，则监听返回按钮事件
        if (plat) {
            uexWindow.onKeyPressed = function(keyCode) {
                if (keyCode == 0) {
                    left = "0%";
                    $("#Page_1").css("box-shadow","rgba(120, 120, 120, 0.298039) 10px 0px 8px").animate({
                        "translateX":left
                    },500)
                    $("#Header").animate({
                        "translateX":left
                    },500) 
                }
            }
            uexWindow.setReportKey(0, 1);
        }
    })
    appcan.button("#nav-left", "btn-act",
    function() {
        $("#page_0").addClass("uhide");
        var tt = setTimeout(function() {
            appcan.window.close(-1);                    
        },200);
    });
    appcan.button("#nav-right", "btn-act",
    function() {
        left = (left == "-80%")?"0%":"-80%";
        $("#Page_1").css("box-shadow","rgba(120, 120, 120, 0.298039) 10px 0px 8px").animate({
            "translateX":left
        },500)
        $("#Header").animate({
            "translateX":left
        },500)  
    });
    
    var tabview_Tab = appcan.tab({
        selector: $("#Tab"),
        hasIcon: false,
        hasAnim: true,
        hasLabel: true,
        hasBadge: false,
        index: 0,
        data: [{
            "label": "新品  ",
            "icon": "fa-home"
        },
        {
            "label": "<div class=\"ulev-1 ub ub-pj\"><div class=\"ulev1\">价格</div><div class=\"resprice ub-img umw1\"></div></div>",
            "icon": "fa-user"
        },
        {
            "label": "销量  ",
            "icon": "fa-list"
        },
        {
            "label": "人气  ",
            "icon": "fa-search"
        }]
    });
    tabview_Tab.on('click',function(obj,index){
        if(index == 1 || index == 3){
            return;
        }
        $('.tab_pane').removeClass('active');
        $($('.tab_pane')[index]).addClass('active');
    })
})($);
function openDetails(e){
    if(appcan.detect.os.phone&&e.type=='click')return;
    appcan.openWinWithUrl('details','details.html');
}