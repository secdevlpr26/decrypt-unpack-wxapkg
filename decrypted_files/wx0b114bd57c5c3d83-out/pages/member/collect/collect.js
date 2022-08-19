var t = require("../../../utils/server"), e = 0;

Page({
    details: function(t) {
        var e = t.currentTarget.dataset.goodsId;
        wx.navigateTo({
            url: "../../goods/detail/detail?objectId=" + e
        });
    },
    deleteGoods: function(o) {
        var s = this;
        wx.showModal({
            title: "提示",
            showCancel: !0,
            content: "确定删除该收藏吗？",
            success: function(a) {
                if (a.confirm) {
                    var l = getApp().globalData.userInfo.user_id, n = o.currentTarget.dataset.goodsId;
                    t.getJSON("/Goods/collectGoods/user_id/" + l + "/goods_id/" + n + "/type/1", function(t) {
                        wx.showToast({
                            title: t.data.msg,
                            icon: "success",
                            duration: 2e3
                        }), e = 0, s.data.collects = [], s.getCollectLists(0);
                    });
                }
            }
        });
    },
    tabClick: function(t) {
        var e = t.currentTarget.dataset.index, o = [ "text-normal", "text-normal", "text-normal", "text-normal", "text-normal", "text-normal" ];
        o[e] = "text-select", this.setData({
            tabClasss: o,
            tab: e
        });
    },
    onReachBottom: function() {
        this.getCollectLists(++e), wx.showToast({
            title: "加载中",
            icon: "loading"
        });
    },
    onPullDownRefresh: function() {
        e = 0, this.data.collects = [], this.getCollectLists(0);
    },
    data: {
        orders: [],
        collects: [],
        tabClasss: [ "text-select", "text-normal", "text-normal", "text-normal", "text-normal" ]
    },
    getCollectLists: function(e) {
        var o = this, s = getApp().globalData.userInfo.user_id;
        t.getJSON("/User/getGoodsCollect/user_id/" + s + "/page/" + e, function(t) {
            var e = t.data.result, s = o.data.collects;
            for (var a in e) s.push(e[a]);
            wx.stopPullDownRefresh(), o.setData({
                collects: s
            });
        });
    },
    onLoad: function() {
        e = 0, this.getCollectLists(0);
    }
});