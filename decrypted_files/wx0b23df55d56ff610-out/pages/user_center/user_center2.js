function a(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var t;

require("../../utils/server");

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
        this.data.q;
    },
    onLoad: function(a) {
        var t = a.user_id;
        getApp().globalData.fid = t, this.setData({
            q: a.q
        });
    },
    onGotUserInfo: function(a) {
        var t = this;
        wx.getUserInfo({
            success: function(a) {
                console.log("userInfo:" + a), t.setData({
                    userInfo: a.userInfo
                }), getApp().globalData.user = a.userInfo, wx.navigateBack({});
            },
            fail: t.showPrePage
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
        }, function(t) {
            200 == t.data.code ? (console.log(t.data.data.length + "___" + a.data.pageSize), 
            a.setData({
                versionNotice: a.data.versionNotice.concat(t.data.data)
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