var t = getApp();

Page({
    data: {
        tabbarlist: [ {
            title: "广告详情"
        }, {
            title: "领取记录"
        } ],
        currenttab: 0,
        picture: [],
        qiang: [],
        quan: {},
        qiang_title: "",
        num: 10,
        quanbindhidden: !0
    },
    totabbar: function(t) {
        var a = t.currentTarget.dataset.index;
        this.setData({
            currenttab: a
        });
    },
    quanbind: function() {
        var a = this, n = a.data.quan, e = wx.getStorageSync("city").city_name;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=get_quan",
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                quan_id: n.quan_id,
                city_id: e
            },
            success: function(t) {
                1 == t.data.status ? (a.setData({
                    quanbindhidden: !1
                }), wx.showModal({
                    title: "提示",
                    content: t.data.result.message,
                    showCancel: !1,
                    success: function(t) {
                        t.confirm && wx.navigateBack();
                    }
                })) : wx.showModal({
                    title: "提示",
                    content: t.data.result.message,
                    showCancel: !1
                });
            }
        });
    },
    tophone: function() {
        var t = this;
        wx.showModal({
            title: "提示",
            content: "确定要拨打" + t.data.quan.quan_tel + "吗？",
            success: function(a) {
                a.confirm && wx.makePhoneCall({
                    phoneNumber: t.data.quan.quan_tel,
                    success: function() {}
                });
            }
        });
    },
    onLoad: function(a) {
        e = this;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=quan_view&vid=" + a.vid,
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                if (1 == a.data.status) {
                    wx.showLoading({
                        title: "正在加载"
                    });
                    for (var n = a.data.result.picture, i = a.data.result.qiang, o = a.data.result.qiang_title, u = a.data.result.quan, s = 0; s < n.length; s++) n[s].picture_url = t.globalData.imgurl + n[s].picture_url;
                    e.setData({
                        picture: n,
                        qiang: i,
                        qiang_title: o,
                        quan: u
                    }), wx.hideLoading();
                } else wx.showToast({
                    title: a.data.result.message,
                    image: "/images/tongcheng/icon-failed.png",
                    success: function() {
                        setTimeout(function() {
                            wx.switchTab({
                                url: "/pages/mine/index/index"
                            });
                        }, 1e3);
                    }
                });
            },
            complete: function() {}
        });
        var n = 10, e = this;
        setInterval(function() {
            0 == n || n--, e.setData({
                num: n
            });
        }, 1e3);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});