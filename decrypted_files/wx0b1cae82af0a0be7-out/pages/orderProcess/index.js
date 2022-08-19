var r = function(r) {
    return r && r.__esModule ? r : {
        default: r
    };
}(require("../../utils/api"));

getApp();

Page({
    data: {
        orderFlow: []
    },
    onLoad: function(e) {
        var t = this;
        this.data.orderNo = e.orderNo, r.default.orderDetail("/serviceOrder/detail", {
            orderNo: this.data.orderNo
        }).then(function(r) {
            t.setData({
                orderFlow: r.result.orderFlow
            });
        });
    }
});