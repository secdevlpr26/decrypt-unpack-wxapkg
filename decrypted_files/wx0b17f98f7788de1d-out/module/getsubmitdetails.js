var e = getApp().globalData.httpUrl;

module.exports = {
    submitDatails: function(t) {
        return new Promise(function(o, r) {
            wx.request({
                url: e + "skordermodel/getOrderById",
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                data: {
                    id: t,
                    orderType: "W"
                },
                success: function(e) {
                    console.log("=====查询提交外卖订单页详情数据=====", e), o(e);
                }
            });
        });
    }
};