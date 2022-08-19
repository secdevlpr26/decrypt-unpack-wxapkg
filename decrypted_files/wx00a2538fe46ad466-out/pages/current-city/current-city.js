var t = getApp();

Page({
    data: {
        shi: [],
        searchlist: [],
        searchhidden: !0,
        inputvalue: "",
        local_city: {},
        local_area: "",
        adslist: [],
        province: []
    },
    toselect: function(a) {
        var e = a.currentTarget.dataset.cityid;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=city_make&city=" + e,
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                wx.setStorageSync("city", t.data.result.city), wx.navigateBack();
            }
        });
    },
    togetshow: function() {
        this.setData({
            searchhidden: !0
        });
    },
    togetfocus: function() {
        this.setData({
            searchhidden: !1
        });
    },
    togetinput: function(t) {
        for (var a = t.detail.value, e = this.data.province, i = [], o = 0; o < e.length; o++) -1 != e[o].city_name.indexOf(a) && 1 != e[o].city_type && i.push(e[o]);
        this.setData({
            searchlist: i
        });
    },
    onLoad: function(a) {
        var e = this;
        wx.setNavigationBarTitle({
            title: "当前市(区)—" + wx.getStorageSync("city").city_name
        }), wx.request({
            url: t.globalData.url + t.globalData.parameter + "&op=fengmian&do=city",
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                if (1 == a.data.status) {
                    for (var i = a.data.result.adslist, o = a.data.result.shi, n = a.data.result.province, c = 0; c < i.length; c++) i[c].ads_pic = t.globalData.imgurl + i[c].ads_pic;
                    e.setData({
                        adslist: i,
                        shi: o,
                        province: n
                    });
                }
            }
        }), wx.getStorageSync("localcity") && this.setData({
            local_city: wx.getStorageSync("localcity")
        }), wx.getStorageSync("district") && this.setData({
            local_area: wx.getStorageSync("district")
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