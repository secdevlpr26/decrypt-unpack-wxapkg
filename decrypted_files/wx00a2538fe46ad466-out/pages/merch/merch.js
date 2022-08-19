var t = getApp();

Page({
    data: {
        temdata: {
            local_city: "",
            rankimage: "/images/tongcheng/index_tongji.gif",
            noticeimage: "/images/tongcheng/icon-notice.png",
            keytext: "找店铺"
        },
        tablist: [],
        currenttab: 0,
        adslist: [],
        navlist: [],
        infolist: [],
        homehidden: !0,
        loadhidden: !0,
        typestatus: "all",
        page: 0,
        keywords: ""
    },
    totabbar: function(t) {
        var a = this;
        a.data.page = 0;
        var e = t.currentTarget.dataset.index, o = t.currentTarget.dataset.type, i = wx.getStorageSync("location");
        a.setData({
            currenttab: e
        }), a.getList(o, i.lat, i.lng);
    },
    tojoin: function() {
        wx.navigateTo({
            url: "/pages/template-cart/template-sort/template-sort?type=2"
        });
    },
    tomerchdetail: function(t) {
        var a = t.currentTarget.dataset.vid;
        wx.navigateTo({
            url: "/pages/merch/merch-detail/merch-detail?vid=" + a
        });
    },
    tolist: function(t) {
        var a = t.currentTarget.dataset.title, e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/index/list/list?title=" + a + "&hangye=" + e
        });
    },
    tolocal: function() {
        wx.navigateTo({
            url: "/pages/current-city/current-city?local_city=" + wx.getStorageSync("city").city_name
        });
    },
    bindconfirm: function(t) {
        var a = this, e = t.detail.value;
        a.data.page = 0, wx.showLoading({
            title: "正在加载..."
        }), a.getsearch(e);
    },
    getsearch: function(a) {
        var e = this, o = wx.getStorageSync("location"), i = e.data.page;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=so_shop",
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                keywords: a,
                lat: o.lat,
                lng: o.lng,
                page: i + 1
            },
            success: function(o) {
                if (1 == o.data.status) {
                    for (var n = o.data.result.ads, s = o.data.result.shop, l = 0; l < n.length; l++) n[l].ads_pic = t.globalData.imgurl + n[l].ads_pic;
                    for (var r = 0; r < s.length; r++) s[r].shop_pic_small = t.globalData.imgurl + s[r].shop_pic_small;
                    var g = e.data.infolist;
                    t.listpage(i, g, s, e), e.setData({
                        adslist: n,
                        homehidden: !1,
                        keywords: a
                    });
                } else wx.showModal({
                    title: "",
                    content: o.data.result.message,
                    showCancel: !1
                });
            },
            complete: function(t) {
                wx.hideLoading();
            }
        });
    },
    getList: function(a, e, o) {
        var i = this, n = i.data.page;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=shop&type=" + a + "&lat=" + e + "&lng=" + o,
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                page: n + 1
            },
            success: function(e) {
                if (1 == e.data.status) {
                    for (var o = e.data.result.adslist, s = e.data.result.hangye_page, l = e.data.result.shop_type, r = e.data.result.shoplist, g = 0; g < o.length; g++) o[g].ads_pic = t.globalData.imgurl + o[g].ads_pic;
                    for (var d = 0; d < s.length; d++) for (var c = 0; c < s[d].length; c++) s[d][c].hangye_pic = t.globalData.imgurl + s[d][c].hangye_pic;
                    for (var h = 0; h < r.length; h++) r[h].shop_pic_small = t.globalData.imgurl + r[h].shop_pic_small;
                    var u = i.data.infolist;
                    t.listpage(n, u, r, i), i.setData({
                        tablist: l,
                        adslist: o,
                        navlist: s,
                        homehidden: !0,
                        typestatus: a
                    });
                }
            },
            complete: function() {
                wx.hideLoading && wx.hideLoading();
            }
        });
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        var t = this, a = this.data.temdata;
        this.data.homehidden;
        if (t.data.page = 0, wx.getStorageSync("city") && (a.local_city = wx.getStorageSync("city").city_name, 
        this.setData({
            temdata: a
        })), wx.getStorageSync("location")) {
            var e = t.data.typestatus;
            wx.showLoading({
                title: "正在加载..."
            });
            var o = wx.getStorageSync("location");
            wx.getStorageSync("keywords") ? (console.log(wx.getStorageSync("keywords")), t.getsearch(wx.getStorageSync("keywords")), 
            wx.setStorageSync("keywords", "")) : t.getList(e, o.lat, o.lng);
        }
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        var t = this;
        if (t.data.page = 0, wx.showLoading({
            title: "正在加载..."
        }), t.data.homehidden) {
            var a = t.data.typestatus, e = wx.getStorageSync("location");
            t.getList(a, e.lat, e.lng);
        } else {
            var o = t.data.keywords;
            t.getsearch(o);
        }
        t.setData({
            loadhidden: !0
        }), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    onReachBottom: function() {
        var t = this;
        if (wx.showLoading({
            title: "正在加载..."
        }), t.data.homehidden) {
            var a = t.data.typestatus, e = wx.getStorageSync("location");
            t.getList(a, e.lat, e.lng);
        } else {
            var o = t.data.keywords;
            t.getsearch(o);
        }
    },
    onShareAppMessage: function() {}
});