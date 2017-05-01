(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {
        appcan.window.close(-1);
    });
    appcan.button("#nav-right", "btn-act",
    function() {});
    appcan.button(".btn", "ani-act", function() {
        if (this.id == "btn2") {
            appcan.openWinWithUrl('shop', 'shop.html');
        }
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
        goodsImg();
    })
    function goodsImg() {
        //商品详情图片轮播
        var slider = appcan.slider({
            selector : '#slider',
            aspectRatio : 9 / 16,
            hasLabel : false,
            index : 0
        });
        slider.set([{
            img : "details/css/myImg/details.jpg"
        }, {
            img : "details/css/myImg/details.jpg"
        }])
        slider.on("clickItem", function(index, data) {
            console.log(index, data);

        })
    }
})($);
function openEvaluate(con) {
    appcan.openWinWithUrl('evaluate', 'evaluate.html');
    appcan.setLocVal("idx", con);
}