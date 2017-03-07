(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {});
    appcan.button("#nav-right", "btn-act",
    function() {});

    appcan.button("#nav-left", "btn-act",
    function() {});
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
        //用于谷歌调试
        //uexWidget.setLogServerIp("",1);
        adImg()
        showGoods()
        showGoods1()
        showGoods2()
    })

    var tabview_Tab = appcan.tab({
        selector: $("#Tab"),
        hasIcon: true,
        hasAnim: false,
        hasLabel: true,
        hasBadge: false,
        index: 0,
        data : [{
            label : "首页",
            icon : "fa-home"
        }, {
            label : "分类",
            icon : "fa-list"
        }, {
            label : "好友",
            icon : "fa-user"
        }, {
            label : "购物车",
            icon : "fa-shopping-cart",
        }]
    });
    tabview_Tab.on('click',function(obj,index){
        $('.tab_pane').removeClass('active');
        $($('.tab_pane')[index]).addClass('active');
        $('.header').addClass('uhide');
        $($('.header')[index]).removeClass('uhide');
    })
    /*pane0*/
    function adImg() {
        //广告图片轮播
        var slider = appcan.slider({
            selector : '#slider',
            aspectRatio : 9 / 16,
            hasLabel : false,
            index : 0
        });
        slider.set([{
            img : "index/css/myImg/car_title.jpg"
        }, {
            img : "index/css/myImg/car_title.jpg"
        }])
        slider.on("clickItem", function(index, data) {
            console.log(index, data);

        })
    }
    /*pane1*/
    function showGoods() {
        var arrData = [{
            "goods" : "\'index/css/myImg/g6.png\'",
            "synopsis" : "服饰内衣",
            "sort" : "女装/男装/内衣",
        }, {
            "goods" : "\'index/css/myImg/g1.png\'",
            "synopsis" : "鞋靴",
            "sort" : "流行男鞋/时尚女鞋",
        }, {
            "goods" : "\'index/css/myImg/g2.png\'",
            "synopsis" : "手机",
            "sort" : "手机通讯/运营商/手机配件",
        }, {
            "goods" : "\'index/css/myImg/g3.png\'",
            "synopsis" : "数码",
            "sort" : "摄影摄像/数码配件/时尚影音",
        }, {
            "goods" : "\'index/css/myImg/g4.png\'",
            "synopsis" : "电脑办公",
            "sort" : "电脑整机/电脑配件",
        }, {
            "goods" : "\'index/css/myImg/g5.png\'",
            "synopsis" : "个护化妆",
            "sort" : "面部护肤/身体护肤",
        }];
        var listData = [];
        for (var i = 0,
            len = arrData.length; i < len; i++) {
            var list = {
                title : arrData[i].synopsis,
                icon : arrData[i].goods,
                describe : arrData[i].sort
            }
            listData.push(list);

        }
        var lv1 = appcan.listview({
            selector : "#showGoods",
            type : "thickLine",
            hasIcon : true,
            hasAngle : false,
            hasSubTitle : false,
            multiLine : 1,
            hasCheckbox : false,
            align : 'left'
        });
        lv1.set(listData);
        lv1.on('click', function(ele, context, obj, subobj) {
            appcan.openWinWithUrl('sort', 'sort.html');
        })
    }
    /*pane2*/
   function showGoods1() {
        var lv1 = appcan.listview({
            selector : "#indexCon_2-listview1",
            type : "thinLine",
            hasIcon : false,
            hasAngle : true,
            hasSubTitle : true,
            multiLine : 1
        });
        lv1.set([{
            title : '全部订单',
            subTitle : '备注文字'
        }]);
        lv1.on('click', function(ele, context, obj, subobj) {
            appcan.openWinWithUrl('orderAll','orderAll.html');
        })
        var lv2 = appcan.listview({
            selector : "#indexCon_2-listview2",
            type : "thinLine",
            hasIcon : false,
            hasAngle : true,
            hasSubTitle : true,
            multiLine : 1
        });
        lv2.set([{
            title : '我的优惠信息',
            subTitle : '卡券优惠乐不停',
            name:"elecoupon"
        }, {
            title : '我的日历',
            subTitle : '',
            name:"rili"
        }]);
        lv2.on('click', function(ele, context, obj, subobj) {
            if(context.name == "elecoupon"){
                appcan.openWinWithUrl(context.name,context.name+'.html');
            }
        })
        var lv3 = appcan.listview({
            selector : "#indexCon_2-listview3",
            type : "thinLine",
            hasIcon : false,
            hasAngle : true,
            hasSubTitle : false,
            multiLine : 1
        });
        lv3.set([{
            title : '宝贝收藏',
            name:"myfav"
        }, {
            title : '店铺收藏',
            name:"myfav"
        }]);
        lv3.on('click', function(ele, context, obj, subobj) {
            appcan.openWinWithUrl(context.name,context.name+'.html');
        })
        var lv4 = appcan.listview({
            selector : "#indexCon_2-listview4",
            type : "thinLine",
            hasIcon : false,
            hasAngle : true,
            hasSubTitle : false,
            multiLine : 1
        });
        
        lv4.set([{
            title : '支付宝'
        }]);
    }
    /*pane3*/
    function showGoods2(){
       var lv1 = appcan.listview({
            selector : "#indexCon_3-listview1",
            type : "thinLine",
            hasIcon : false,
            hasAngle : false,
            hasSubTitle : false,
            multiLine : 1,
            hasCheckbox : true,
            align : 'left'
        });
        lv1.set([{
            title : "<div class=\"ub\"><div>沂蒙健康食品专营店</div><div class=\"tx-r ub-f1 ulev-4 t-org-c9\">完成</div></div>",
        }]);
        lv1.on('click', function(ele, context, obj, subobj) {
            if(obj[0].nodeName=="INPUT"){
                var chck = $("#indexCon_3-listview1").find("input[type='checkbox']").prop("checked");
                $("#indexCon_3-listview1").next().find("input[type='checkbox']").prop("checked",chck);
                //$("#listview2").find("input[type='checkbox']").prop("checked",!chck);
            }
            else{
                var chck = $("#indexCon_3-listview1").find("input[type='checkbox']").prop("checked");
                $("#indexCon_3-listview1").next().find("input[type='checkbox']").prop("checked",chck);
            }
        });
        var lv2 = appcan.listview({
            selector : "#indexCon_3-listview2",
            type : "thinLine",
            hasIcon : false,
            hasAngle : false,
            hasSubTitle : false,
            multiLine : 1,
            hasCheckbox : true,
            align : 'left'
        });
        lv2.set([{
            title : "<div class=\"ub\"><div>沂蒙健康食品专营店</div><div class=\"tx-r ub-f1 ulev-4 t-org-c9\">编辑</div></div>",
        }]);
        lv2.on('click', function(ele, context, obj, subobj) {
            if(obj[0].nodeName=="INPUT"){
                var chck = $("#indexCon_3-listview2").find("input[type='checkbox']").prop("checked");
                $("#indexCon_3-listview2").next().find("input[type='checkbox']").prop("checked",chck);
                //$("#listview2").find("input[type='checkbox']").prop("checked",!chck);
            }
            else{
                var chck = $("#indexCon_3-listview2").find("input[type='checkbox']").prop("checked");
                $("#indexCon_3-listview2").next().find("input[type='checkbox']").prop("checked",chck);
                //$("#listview2").next().find("input[type='checkbox']").prop("checked",!chck);
            }
        });
         $("#indexCon_3-listview1").find("input[type='checkbox']").change(function(){
             $("#indexCon_3-listview1").next().find("input[type='checkbox']").prop("checked",this.checked);  
         });
         $("#indexCon_3-listview2").find("input[type='checkbox']").change(function(){
             $("#indexCon_3-listview2").next().find("input[type='checkbox']").prop("checked",this.checked);  
         });
    }
})($);
