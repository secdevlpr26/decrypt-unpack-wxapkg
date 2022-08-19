var t = getApp();

Page({
    data: {
        temdata: {
            local_city: "",
            keytext: "专业煤炭交易平台"
        },
        adslist: [],
        infolist: [],
        page: 0,
        loadhidden: !0
    },
    tolocal: function() {
        wx.navigateTo({
            url: "/pages/current-city/current-city?local_city=" + this.data.temdata.local_city
        });
    },
    toquanview: function(t) {
        var a = t.currentTarget.dataset.vid;
        wx.navigateTo({
            url: "/pages/packet/quanview/quanview?vid=" + a
        });
    },
    topullquan: function() {
        wx.navigateTo({
            url: "/pages/packet/release/release"
        });
    },
    bindconfirm: function(t) {
        var a = t.detail.value;
        a && (wx.setStorageSync("keywords", a), wx.showLoading({
            title: "正在加载...",
            success: function() {
                wx.switchTab({
                    url: "/pages/index/index"
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        }));
    },
    onLoad: function(t) {},
    onReady: function() {},
    getList: function() {
        var a = this, e = a.data.page, i = wx.getStorageSync("location");
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=quan",
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                lat: i.lat,
                lng: i.lng,
                page: e + 1
            },
            success: function(i) {
                if (1 == i.data.status) {
                    for (var n = i.data.result.ads, o = i.data.result.quan, s = 0; s < n.length; s++) n[s].ads_pic = t.globalData.imgurl + n[s].ads_pic;
                    var l = a.data.infolist;
                    t.listpage(e, l, o, a), a.setData({
                        adslist: n
                    });
                }
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    onShow: function() {
        var t = this;
        this.data.page = 0, wx.showLoading({
            title: "正在加载"
        });
        var a = this.data.temdata;
        wx.getStorageSync("city") && (a.local_city = wx.getStorageSync("city").city_name, 
        this.setData({
            temdata: a
        })), t.getList();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        var t = this;
        t.data.page = 0, wx.showLoading({
            title: "正在加载..."
        }), t.getList(), t.setData({
            loadhidden: !0
        }), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    onReachBottom: function() {
        var t = this;
        wx.showLoading({
            title: "正在加载..."
        }), t.getList();
    },
    onShareAppMessage: function() {}
});