var t = getApp(), o = 1, a = 1;

Page({
    data: {
        productList: []
    },
    onLoad: function() {},
    onShow: function() {
        o = 1, this.getDistributeProduct();
    },
    getDistributeProduct: function() {
        var i = this;
        wx.request({
            url: t.globalData.comUrl + "activityProduct_findGroupsProduceList.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                groupsId: "distribution",
                current: o
            },
            success: function(t) {
                var o = t.data;
                a = o.pages, i.setData({
                    productList: i.data.productList.concat(o.pageList)
                });
            }
        });
    },
    toProductDetail: function(t) {
        wx.navigateTo({
            url: "../../product/pro-detail/pro-detail?productId=" + t.currentTarget.dataset.pid
        });
    },
    onReachBottom: function() {
        o < a && (o++, this.getDistributeProduct());
    }
});