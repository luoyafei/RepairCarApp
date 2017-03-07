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
        showGoods();
    })
    function showGoods() {
        var arrData = [{
            "goods" : "\'myfav/css/myImg/gs1.png\'",
            "synopsis" : "情人节礼物怡吻手工松露巧...",
            "price" : "￥69",
            "price2" : "￥99",
            "popularity" : "18",

        }, {
            "goods" : "\'myfav/css/myImg/gs2.png\'",
            "synopsis" : "香港OPPO女包2014新款包",
            "price" : "￥69",
            "price2" : "￥99",
            "popularity" : "18",
        }, {
            "goods" : "\'myfav/css/myImg/gs3.png\'",
            "synopsis" : "包邮零俊间厅柜 门厅玄关隔",
            "price" : "￥69",
            "price2" : "￥99",
            "popularity" : "68",
        }, {
            "goods" : "\'myfav/css/myImg/gs4.png\'",
            "synopsis" : "普耐尔S1学习机安卓系统7寸",
            "price" : "￥629",
            "price2" : "￥99",
            "popularity" : "21",
        }, {
            "goods" : "\'myfav/css/myImg/gs5.png\'",
            "synopsis" : "KINGBAND棒球服男 棒球衫",
            "price" : "￥69",
            "price2" : "￥99",
            "popularity" : "233",
        }, {
            "goods" : "\'myfav/css/myImg/gs6.png\'",
            "synopsis" : "奢谷SHEGU女士韩版上衣",
            "price" : "￥69",
            "price2" : "￥99",
            "popularity" : "122",
        }];

        var listData = [];
        for (var i = 0,
            len = arrData.length; i < len; i++) {
            var list = {
                title : arrData[i].synopsis,
                icon : arrData[i].goods,
                describe : '<div class="sc-text-warn ">' + arrData[i].price + '</div>'
            }
            listData.push(list);
        }
        var lv1 = appcan.listview({
            selector : "#goodsList",
            type : "thickLine",
            hasIcon : true,
            hasAngle : true,
            hasSubTitle : false,
            multiLine : 1,
            hasCheckbox : false,
            align : 'left'
        });
        lv1.set(listData);
    }
})($);