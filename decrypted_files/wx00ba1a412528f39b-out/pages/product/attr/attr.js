var t = getApp();

require("../../../utils/api/product.js");

Page({
    data: {
        product: {}
    },
    onLoad: function(a) {
        this.setData({
            product: t.globalData.product
        });
    }
});