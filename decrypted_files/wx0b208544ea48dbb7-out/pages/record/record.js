Page({
    data: {
        recordList: []
    },
    onShareAppMessage: function() {
        return {
            title: app.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        this.getRecordList();
    },
    onHide: function() {},
    onUnload: function() {},
    getRecordList: function() {
        var t = wx.getStorageSync("record_list");
        this.setData({
            recordList: t
        });
    },
    toToGoods: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../goods/goods?id=" + e
        });
    },
    delRecord: function(t) {
        var e = t.currentTarget.dataset.index, o = this, n = o.data.recordList[e], r = wx.getStorageSync("record_list") || [], i = n;
        r.length > 0 && r.some(function(t, e) {
            return t.goods_id == i.goods_id;
        }) && (r.splice(e, 1), o.setData({
            recordList: r
        }), wx.showToast({
            title: "删除成功"
        })), wx.setStorageSync("record_list", r);
    }
});