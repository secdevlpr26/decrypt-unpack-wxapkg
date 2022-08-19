var t = getApp();

Page({
    data: {
        goods_recommend: [],
        list: [],
        picture: [],
        vid: "",
        windowHeight: "",
        goodsindex: 0,
        goodstitle: ""
    },
    getList: function(o, e, i) {
        var a = this;
        wx.showLoading({
            title: "正在加载"
        }), wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=shopgoods_list&vid=" + o,
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                typeid: e
            },
            success: function(e) {
                for (var l = e.data.result.goodslist, n = e.data.result.list, r = e.data.result.picture, s = 0; s < l.length; s++) l[s].thumb_one = t.globalData.imgurl + l[s].thumb_one;
                for (var d = 0; d < r.length; d++) r[d].picture_url = t.globalData.imgurl + r[d].picture_url;
                for (var u = 0; u < n.length; u++) n[u].list_pic && (n[u].list_pic = t.globalData.imgurl + n[u].list_pic);
                a.setData({
                    vid: o,
                    goods_recommend: l,
                    list: n,
                    picture: r,
                    goodsindex: i,
                    goodstitle: n[i].list_name
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    tolist: function(t) {
        var o = t.currentTarget.dataset.typeid, e = t.currentTarget.dataset.index, i = this.data.vid;
        this.getList(i, o, e);
    },
    toproduct: function(t) {
        var o = t.currentTarget.dataset.id, e = this.data.vid;
        wx.redirectTo({
            url: "/pages/merch/merch-product/merch-product?id=" + o + "&vid=" + e
        });
    },
    onLoad: function(o) {
        var e = this;
        wx.showLoading({
            title: "正在加载"
        }), wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=shopgoods_list&vid=" + o.vid,
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(i) {
                for (var a = i.data.result.goodslist, l = i.data.result.list, n = i.data.result.picture, r = 0; r < a.length; r++) a[r].thumb_one = t.globalData.imgurl + a[r].thumb_one;
                for (var s = 0; s < n.length; s++) n[s].picture_url = t.globalData.imgurl + n[s].picture_url;
                for (var d = 0; d < l.length; d++) l[d].list_pic && (l[d].list_pic = t.globalData.imgurl + l[d].list_pic);
                e.setData({
                    vid: o.vid,
                    goods_recommend: a,
                    list: l,
                    picture: n,
                    goodstitle: l[0].list_name
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        }), wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    windowHeight: t.windowHeight
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});