var t = getApp();

Page({
    data: {
        sortlist: [],
        adslist: [],
        sorterjihidden: !0,
        hangyelist: [],
        type: "",
        listerji: []
    },
    toclassify: function(t) {
        var a = this, e = t.currentTarget.dataset.id;
        "add" == this.data.type ? this.geterjiList(a.data.type, e, "") : this.geterjiList(a.data.type, "", e), 
        this.setData({
            sorterjihidden: !1
        });
    },
    tosortclear: function() {
        this.setData({
            sorterjihidden: !0
        });
    },
    toform: function(t) {
        var a = this, e = t.currentTarget.dataset.id, i = t.currentTarget.dataset.title;
        this.setData({
            sorterjihidden: !0
        }), "add" == a.data.type ? wx.navigateTo({
            url: "/pages/index/publish/publish?id=" + e + "&title=" + i
        }) : wx.navigateTo({
            url: "/pages/merch/merch-join/merch-join?id=" + e
        });
    },
    geterjiList: function(a, e, i) {
        var s = this;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=" + a,
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                list: e,
                hangye_id: i
            },
            success: function(a) {
                if (1 == a.data.status) if ("" != e) {
                    for (var i = a.data.result.listerji, l = 0; l < i.length; l++) i[l].list_link_url && (i[l].list_link_url = t.globalData.imgurl + i[l].list_link_url);
                    s.setData({
                        listerji: i
                    });
                } else {
                    for (var n = a.data.result.hangyedata, l = 0; l < n.length; l++) n[l].hangye_link_url && (n[l].hangye_link_url = t.globalData.imgurl + n[l].hangye_link_url);
                    s.setData({
                        hangyeerji: n
                    });
                }
            }
        });
    },
    getList: function(a) {
        var e = this;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=" + a,
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(i) {
                if (1 == i.data.status) {
                    var s = [], l = [];
                    if ("add" == a) {
                        s = i.data.result.list;
                        for (var n = 0; n < s.length; n++) s[n].list_pic = t.globalData.imgurl + s[n].list_pic;
                    } else {
                        l = i.data.result.hangye;
                        for (var r = 0; r < l.length; r++) l[r].hangye_pic = t.globalData.imgurl + l[r].hangye_pic;
                    }
                    for (var o = i.data.result.ads, d = 0; d < o.length; d++) o[d].ads_pic = t.globalData.imgurl + o[d].ads_pic;
                    e.setData({
                        sortlist: s,
                        hangyelist: l,
                        adslist: o,
                        type: a
                    });
                }
            }
        });
    },
    onLoad: function(t) {
        1 == t.type ? (this.getList("add"), wx.setNavigationBarTitle({
            title: "发布信息"
        })) : (this.getList("join_shop"), wx.setNavigationBarTitle({
            title: "入驻商户"
        }));
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});