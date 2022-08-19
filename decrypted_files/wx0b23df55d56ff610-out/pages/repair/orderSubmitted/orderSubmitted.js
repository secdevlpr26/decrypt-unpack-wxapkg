Page({
    data: {},
    onLoad: function(a) {
        this.setData({
            oid: a.oid,
            price: a.price
        });
    },
    goToHome: function() {
        wx.navigateBack({
            delta: 3
        });
    }
});