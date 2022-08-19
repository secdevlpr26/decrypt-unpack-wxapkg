var t = getApp();

Page({
    data: {
        temdata: {
            local_city: "定位中",
            rankimage: "/images/tongcheng/index_tongji.gif",
            noticeimage: "/images/tongcheng/icon-notice.png",
            keytext: "专业煤炭交易平台"
        },
        showlist: [ {
            title: "同城好店",
            content: "翠花，上菜",
            thumb: "/images/tongcheng/show/index_show_1.jpg",
            color: "#FFCF1D"
        }, {
            title: "限时秒杀",
            content: "手快有，手慢无",
            thumb: "/images/tongcheng/show/index_show_2.jpg",
            color: "#FE4445"
        }, {
            title: "抢红包",
            content: "红包雨抢不停",
            thumb: "/images/tongcheng/show/index_show_3.jpg",
            color: "#FE4445"
        }, {
            title: "同城邂逅",
            content: "心有灵犀一点通",
            thumb: "/images/tongcheng/show/index_show_4.jpg",
            color: "#009BFF"
        } ],
        adslist: [],
        infolist: [],
        noticelist: [],
        navlist: [],
        homehidden: !0,
        keywords: "",
        page: 0,
        loadhidden: !0
    },
    tolist: function(t) {
        var a = t.currentTarget.dataset.title, e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/index/list/list?title=" + a + "&listid=" + e
        });
    },
    todetail: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/index/detail/detail?vid=" + a
        });
    },
    toshowlist: function(t) {
        var a = t.currentTarget.dataset.index;
        0 == a && wx.switchTab({
            url: "/pages/merch/merch"
        }), 2 == a && wx.switchTab({
            url: "/pages/packet/packet"
        }), 3 == a && wx.switchTab({
            url: "/pages/nearby/nearby"
        });
    },
    touserinfo: function(t) {
        var a = t.currentTarget.dataset.uid;
        wx.navigateTo({
            url: "/pages/index/user-detail/user-detail?uid=" + a
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
        }), a.getSearch(e);
    },
    getSearch: function(a) {
        var e = this, i = e.data.page;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=so_info",
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                keywords: a,
                page: i + 1
            },
            success: function(o) {
                if (1 == o.data.status) {
                    for (var n = o.data.result.ads, s = 0; s < n.length; s++) n[s].ads_pic = t.globalData.imgurl + n[s].ads_pic;
                    var l = o.data.result.info, r = e.data.infolist;
                    t.listpage(i, r, l, e), e.setData({
                        adslist: n,
                        homehidden: !1,
                        keywords: a
                    });
                }
            },
            complete: function(t) {
                wx.hideLoading();
            }
        });
    },
    topublish: function() {
        wx.navigateTo({
            url: "/pages/template-cart/template-sort/template-sort?type=1"
        });
    },
    getList: function(a) {
        var e = this, i = e.data.page;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=fengmian",
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                page: i + 1
            },
            success: function(o) {
                if (1 == o.data.status) {
                    var n = o.data.result.adslist, s = o.data.result.infolist, l = o.data.result.noticelist, r = o.data.result.list_page;
                    a.allinfo = o.data.result.allinfo, a.allshop = o.data.result.allshop, a.allview = o.data.result.allview, 
                    a.local_city = wx.getStorageSync("city").city_name;
                    for (var d = 0; d < n.length; d++) n[d].ads_pic = t.globalData.imgurl + n[d].ads_pic;
                    for (var g = 0; g < r.length; g++) for (var c = 0; c < r[g].length; c++) r[g][c].list_pic = t.globalData.imgurl + r[g][c].list_pic;
                    var u = e.data.infolist;
                    t.listpage(i, u, s, e), e.setData({
                        temdata: a,
                        adslist: n,
                        navlist: r,
                        noticelist: l,
                        homehidden: !0
                    });
                }
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        var t = this, a = this.data.temdata;
        t.data.page = 0, wx.showLoading({
            title: "正在加载..."
        }), wx.setNavigationBarTitle({
            title: wx.getStorageSync("sysset") ? wx.getStorageSync("sysset").wxapp_name : "XT同城信息"
        }), wx.getStorageSync("keywords") ? (t.getSearch(wx.getStorageSync("keywords")), 
        wx.setStorageSync("keywords", "")) : t.getList(a);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        var t = this, a = this.data.temdata;
        t.data.page = 0, wx.showLoading({
            title: "正在加载..."
        }), t.data.homehidden ? t.getList(a) : t.getSearch(t.data.keywords), t.setData({
            loadhidden: !0
        }), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    onReachBottom: function() {
        var t = this;
        wx.showLoading({
            title: "正在加载..."
        });
        var a = this.data.temdata;
        t.data.homehidden ? t.getList(a) : t.getSearch(t.data.keywords);
    },
    onShareAppMessage: function() {}
});