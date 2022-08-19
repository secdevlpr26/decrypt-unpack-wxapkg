function a(a, e, t) {
    return e in a ? Object.defineProperty(a, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[e] = t, a;
}

var t;

Page({
    data: (t = {
        isLoad: !0,
        isLogin: 0,
        page: 1,
        pageSize: 10,
        unReadNum: 0,
        vn: "",
        isShowVersion: !1,
        isLoadAll: !1,
        isQb: !1
    }, a(t, "isLoad", !0), a(t, "isLogin", 1), t),
    onShow: function() {
        this.setData({
            isLogin: wx.getStorageSync("isLogin")
        }), this.data.isLogin && (this.data.openId ? wx.switchTab({
            url: "../repair/home/home?openId=" + this.data.openId
        }) : wx.switchTab({
            url: "../repair/home/home"
        }));
    },
    onLoad: function(a) {
        var e = a.openId;
        a.user_id && (getApp().globalData.fid = a.user_id), e && this.setData({
            openId: e
        });
    },
    onGotUserInfo: function(a) {
        var e = this;
        wx.getUserInfo({
            success: function(a) {
                console.log("userInfo:" + a), e.setData({
                    userInfo: a.userInfo
                }), getApp().globalData.user = a.userInfo, wx.setStorageSync("isLogin", 1), e.data.openId ? wx.switchTab({
                    url: "../repair/home/home?openId=" + e.data.openId
                }) : wx.switchTab({
                    url: "../repair/home/home"
                });
            },
            fail: e.showPrePage
        });
    },
    getNotiNum: function(a) {
        var t = this;
        e.default._get(i.default.getNotiNum(), {}, function(a) {
            200 == a.data.code && (console.log(a.data.data.total), t.setData({
                unReadNum: a.data.data.total,
                isLoad: !1
            }));
        });
    },
    getVersionNotice: function() {
        var a = this;
        e.default._get(i.default.getVersionNotice(), {
            page: a.data.page,
            pageSize: a.data.pageSize
        }, function(e) {
            200 == e.data.code ? (console.log(e.data.data.length + "___" + a.data.pageSize), 
            a.setData({
                versionNotice: a.data.versionNotice.concat(e.data.data)
            }), console.log(a.data.versionNotice)) : a.setData({
                isLoadAll: !0
            });
        });
    },
    onPageBottom: function() {
        var a = this;
        a.data.isLoadAll || (a.setData({
            page: a.data.page + 1
        }), a.getVersionNotice());
    },
    showLog: function() {
        this.setData({
            isShowVersion: !this.data.isShowVersion
        });
    }
});