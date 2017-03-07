var Service = new MVVM.Service({
    pretreatment: function(data, option) {
        return data;
    },
    dosuccess: function(data, option) {
        return data;
    },
    doerror: function(e, err, option) {
        return err;
    },
    validate: function(data, option) {
        return 0;
    },
    ajaxCall: function(data, option) {
        var self = this;
        var data = [{
            "goods":"\'goodsList/css/myImg/goods1.png\'",
            "synopsis":"女士韩版上衣",
            "price":"￥69"
        }, {
            "goods":"\'goodsList/css/myImg/goods2.png\'",
            "synopsis":"华伊格纯棉女衬衣",
            "price":"￥119"
        },{
            "goods":"\'goodsList/css/myImg/goods3.png\'",
            "synopsis":"优鲨U-SHARK衬衫",
            "price":"￥129"
        },{
            "goods":"\'goodsList/css/myImg/goods4.png\'",
            "synopsis":"依嬅莎修身打底T恤",
            "price":"￥112"
        },{
            "goods":"\'goodsList/css/myImg/goods5.png\'",
            "synopsis":"偌享RUOXIANG打底衫",
            "price":"￥67"
        },{
            "goods":"\'goodsList/css/myImg/goods6.png\'",
            "synopsis":"韩版修身",
            "price":"￥144"
        }];
        option.success(self.dosuccess(data, option));
        /*appcan.request.ajax({
                url: "",
                type: "GET",
                data: this.pretreatment(data, option),
                dataType: "",
                contentType: "application/x-www-form-urlencoded",
                success: function(data) {
                    var res = self.validate(data, option);
                    if (!res) option.success(self.dosuccess(data, option));
                    else option.error(self.doerror(data, res, option));
                },
                error: function(e, err) {
                    option.error(self.doerror(e, err, option));
                }
            });*/
    }
});
var Service1 = new MVVM.Service({
    pretreatment: function(data, option) {
        return data;
    },
    dosuccess: function(data, option) {
        return data;
    },
    doerror: function(e, err, option) {
        return err;
    },
    validate: function(data, option) {
        return 0;
    },
    ajaxCall: function(data, option) {
        var self = this;
        var data = [{
            "goods":"\'goodsList/css/myImg/gs1.png\'",
            "synopsis":"情人节礼物怡吻手工松露巧...",
            "price":"￥69",
            "price2":"￥99",
            "popularity":"18"
            
        }, {
            "goods":"\'goodsList/css/myImg/gs2.png\'",
            "synopsis":"香港OPPO女包2014新款包",
            "price":"￥69",
            "price2":"￥99",
            "popularity":"18"
        },{
            "goods":"\'goodsList/css/myImg/gs3.png\'",
            "synopsis":"包邮零俊间厅柜 门厅玄关隔",
            "price":"￥69",
            "price2":"￥99",
            "popularity":"68"
        },{
            "goods":"\'goodsList/css/myImg/gs4.png\'",
            "synopsis":"普耐尔S1学习机安卓系统7寸",
            "price":"￥629",
            "price2":"￥99",
            "popularity":"21"
        },{
            "goods":"\'goodsList/css/myImg/gs5.png\'",
            "synopsis":"KINGBAND棒球服男 棒球衫",
            "price":"￥69",
            "price2":"￥99",
            "popularity":"233"
        },{
            "goods":"\'goodsList/css/myImg/gs6.png\'",
            "synopsis":"奢谷SHEGU女士韩版上衣",
            "price":"￥69",
            "price2":"￥99",
            "popularity":"122"
        }];
        option.success(self.dosuccess(data, option));
        /*appcan.request.ajax({
                url: "",
                type: "GET",
                data: this.pretreatment(data, option),
                dataType: "",
                contentType: "application/x-www-form-urlencoded",
                success: function(data) {
                    var res = self.validate(data, option);
                    if (!res) option.success(self.dosuccess(data, option));
                    else option.error(self.doerror(data, res, option));
                },
                error: function(e, err) {
                    option.error(self.doerror(e, err, option));
                }
            });*/
    }
});
var Model_Collection = MVVM.Model.extend({
    defaults: {},
    computeds: {},
    sync: function(method, model, options) {
        switch (method) {
        case "create":

            break;
        case "update":

            break;
        case "patch":

            break;
        case "delete":

            break;
        default:
            break;
        }
    }
})
var Collection = MVVM.Collection.extend({
    initialize: function() {
        return;
    },
    parse: function(data) {
        return data;
    },
    model: Model_Collection,
    sync: function(method, collection, options) {
        switch (method) {
        case "read":
            Service.request({}, options);
            break;
        default:
            break;
        }
    }
});
var Collection1 = MVVM.Collection.extend({
    initialize: function() {
        return;
    },
    parse: function(data) {
        return data;
    },
    model: Model_Collection,
    sync: function(method, collection, options) {
        switch (method) {
        case "read":
            Service1.request({}, options);
            break;
        default:
            break;
        }
    }
});
var ViewModel = new(MVVM.ViewModel.extend({
    el: "#Pane_0",
    initialize: function() {
        this.collection.fetch({})
        return;
    },
    collection: new Collection,
    // itemEvents: {
        // "tap li": function(ev, param) {
            // if(appcan.detect.os.phone&&ev.type=='click')return;
            // appcan.openWinWithUrl('details','details.html');
        // },
    // }
}))();
var ViewModel1 = new(MVVM.ViewModel.extend({
    el: "#Pane_2",
    initialize: function() {
        this.collection.fetch({})
        return;
    },
    collection: new Collection1,
    // itemEvents: {
        // "tap #Box_kJLBm6": function(ev, param) {
            // alert("它点击我了" + JSON.stringify(this.model.toJSON()));
        // },
    // }
}))();