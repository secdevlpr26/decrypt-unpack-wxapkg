var t = require("../../utils/server"), a = 0, e = "-1";

Page({
    tabClick: function(t) {
        var s = t.currentTarget.dataset.index, r = [ "text-normal", "text-normal", "text-normal", "text-normal", "text-normal", "text-normal" ];
        r[s] = "text-select", this.setData({
            tabClasss: r,
            tab: s
        }), a = 0, e = [ "-1", "0", "1" ][s], this.data.comments = [], this.getEvaluateLists(e, a);
    },
    details: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.comments[a].user_id;
        1 == this.data.tab ? wx.navigateTo({
            url: "person2?id=" + e + "&type=0"
        }) : 0 == this.data.tab && wx.navigateTo({
            url: "person1?id=" + e + "&type=" + this.data.tab
        });
    },
    onPullDownRefresh: function() {
        a = 0, this.data.orders = [], this.getEvaluateLists(e, a);
    },
    data: {
        tab: 0,
        comments: [],
        tabClasss: [ "text-select", "text-normal", "text-normal", "text-normal", "text-normal" ]
    },
    getEvaluateLists: function(a, s) {
        var r = this, i = getApp().globalData.userInfo.user_id;
        t.getJSON("/User/distributUser", {
            status: e,
            user_id: i
        }, function(t) {
            var a = t.data.result, e = r.data.comments;
            for (var s in a) e.push(a[s]);
            wx.stopPullDownRefresh(), r.setData({
                comments: a
            });
        });
    },
    details1: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.comments[a];
        wx.navigateTo({
            url: "../../order/details/index?order_id=" + e.order_id
        });
    },
    addevaluate: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.comments[a];
        wx.navigateTo({
            url: "addevaluate/index?goods_name=" + e.goods_name + "&image=" + e.image + "&spec=" + e.spec_key_name + "&goods_id=" + e.goods_id + "&order_id=" + e.order_id
        });
    },
    onShow: function() {
        e = "-1", this.setData({
            tab: 0
        }), a = 0, this.getEvaluateLists(-1, a);
    }
});