var t = require("../../utils/server"), e = 0, a = "-1";

Page({
    tabClick: function(t) {
        var s = t.currentTarget.dataset.index, i = [ "text-normal", "text-normal", "text-normal", "text-normal", "text-normal", "text-normal" ];
        i[s] = "text-select", this.setData({
            tabClasss: i,
            tab: s
        }), e = 0, a = [ "-1", "0", "1" ][s], this.data.comments = [], this.getEvaluateLists(a, e);
    },
    onPullDownRefresh: function() {
        e = 0, this.data.orders = [], this.getEvaluateLists(a, e);
    },
    data: {
        comments: [],
        tabClasss: [ "text-select", "text-normal", "text-normal", "text-normal", "text-normal" ]
    },
    getEvaluateLists: function(e, s) {
        var i = this, r = getApp().globalData.userInfo.user_id;
        t.getJSON("/User/distributUser1", {
            status: a,
            user_id: r,
            cid: this.data.id,
            type: this.data.type
        }, function(t) {
            var e = t.data.result, a = i.data.comments;
            for (var s in e) a.push(e[s]);
            wx.stopPullDownRefresh(), i.setData({
                comments: e
            });
        });
    },
    details: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.comments[e].id;
        wx.navigateTo({
            url: "person2?id=" + a + "&type=0"
        });
    },
    addevaluate: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.comments[e];
        wx.navigateTo({
            url: "addevaluate/index?goods_name=" + a.goods_name + "&image=" + a.image + "&spec=" + a.spec_key_name + "&goods_id=" + a.goods_id + "&order_id=" + a.order_id
        });
    },
    onLoad: function(t) {
        this.setData({
            id: t.id
        }), this.setData({
            type: t.type
        }), e = 0, this.getEvaluateLists("-1", e);
    }
});