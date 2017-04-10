(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {
        appcan.window.close(-1);
    });
    appcan.button("#nav-right", "btn-act",
    function() {});
    
    /**
     * 构造返回值对象
 * @param {Object} success
 * @param {Object} reason
 * @param {Object} maxCount
 * @param {Object} allOrders
     */
    var ReturnObj = function(success, reason, maxCount, allOrders) {
        this.success = success;
        this.reason = reason;
        this.maxCount = maxCount;
        this.allOrders = allOrders;
        ReturnObj.prototype.setSuccess = function(success) {
            this.success = success;
        }
        ReturnObj.prototype.setReason = function(reason) {
            this.reason = reason;
        }
        ReturnObj.prototype.setMaxCount = function(maxCount) {
            this.maxCount = maxCount;
        }
        ReturnObj.prototype.setAllOrders = function(allOrders) {
            this.allOrders = allOrders;
        }
    }
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
        //sortList();
        
        appcan.ajax({
            url : 'http://localhost:8080/LearnSpringMVC/getInfo',
            type : 'GET',
            data : {},
            offline : true,
            success : function(data) {
                var jsonObj = JSON.parse(data);
                var dataObj =  new ReturnObj(jsonObj.success, jsonObj.reason, jsonObj.maxCount, jsonObj.allOrders); 
                sortList(jsonObj.allOrders);
                //alert(JSON.stringify(dataObj));
            },
            error : function(e) {
                alert(e);
            }
        });
        
    })
    
})($);
function sortList(arrData) {
    /*
    var arrData = [{
                "sort" : "鐠併垹宕�",
            }, {
                "sort" : "鐠併垹宕�",
            }, {
                "sort" : "鐠併垹宕�",
            }, {
                "sort" : "鐠併垹宕�",
            }, {
                "sort" : "鐠併垹宕�",
            }, {
                "sort" : "鐠併垹宕�",
            }, {
                "sort" : "鐠併垹宕�",
            }, {
                "sort" : "鐠併垹宕�",
            }, {
                "sort" : "鐠併垹宕�",
            }];*/
    

    var listData = [];
    for (var i = 0,
        len = arrData.length; i < len; i++) {
        var list = {
            title : arrData[i]
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
        //appcan.openWinWithUrl('goodsList','goodsList.html',10,256);
         appcan.openWinWithUrl('details','details.html');
    })
}