(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {
        appcan.window.close(-1);
    });
    appcan.button("#nav-right", "btn-act",
    function() {
        appcan.openWinWithUrl('comment', 'comment.html');
    });
    var tabview_Tab = appcan.tab({
        selector: $("#Tab"),
        hasIcon: false,
        hasAnim: true,
        hasLabel: true,
        hasBadge: false,
        index: 0,
        data: [{
            "label": "产品参数",
            "icon": ""
        },
        {
            "label": "评价<span class=\"t-f1\">78</span>"
        },
        {
            "label": "同店推荐"
        }]
    });
    tabview_Tab.on('click',function(obj,index){
        if(index == 2){
            return;            
        }
        $('.tab_pane').removeClass('active');
        $($('.tab_pane')[index]).addClass('active');
    })
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
})($);