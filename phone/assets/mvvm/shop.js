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
            "goods" : "\'shop/css/myImg/goods3.png\'",
            "synopsis" : "奢谷SHEGU女士韩版上衣",
            "price" : "￥69",
        }, {
            "goods" : "\'shop/css/myImg/goods2.png\'",
            "synopsis" : "华伊格Veri Gude春装新款女装韩版白色领子袖子拼接衬衫百搭纯棉女衬衣",
            "price" : "￥119",
        }, {
            "goods" : "\'shop/css/myImg/goods1.png\'",
            "synopsis" : "优鲨U-SHARK全棉英伦格纹磨毛长袖衬衫",
            "price" : "￥129",
        }, {
            "goods" : "\'shop/css/myImg/goods4.png\'",
            "synopsis" : "抢购市场价178元的依嬅莎韩版修身打底T恤",
            "price" : "￥112",
        }, {
            "goods" : "\'shop/css/myImg/goods5.png\'",
            "synopsis" : "偌享RUOXIANG韩版宽松套头针织打底衫",
            "price" : "￥67",
        }, {
            "goods" : "\'shop/css/myImg/goods6.png\'",
            "synopsis" : "装新品首发，韩版修身显瘦",
            "price" : "￥144",
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
var Collection = new(MVVM.Collection.extend({
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
}))();
var ViewModel = new(MVVM.ViewModel.extend({
    el: "#showGoods",
    initialize: function() {
        this.collection.fetch({})
        return;
    },
    collection: Collection,


}))();