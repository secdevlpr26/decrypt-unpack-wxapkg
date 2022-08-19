var t = getApp();

Page({
    data: {
        hostUrl: t.globalData.hostUrl
    },
    onLoad: function(t) {
        var e = this, a = t.index;
        e.setData({
            index: a
        }), 1 == a && wx.setNavigationBarTitle({
            title: "实训报名列表"
        }), 2 == a && wx.setNavigationBarTitle({
            title: "申请考试列表"
        }), 3 == a && wx.setNavigationBarTitle({
            title: "申请证书列表"
        }), 4 == a && wx.setNavigationBarTitle({
            title: "申请标准版列表"
        });
        var s = wx.getStorageSync("userId");
        null != s && s > 0 && "" != s ? e.getAddressList() : wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        });
    },
    getAddressList: function() {
        var e = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getsqsxList",
                userId: wx.getStorageSync("userId"),
                where: "",
                lx: e.data.index
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data && e.setData({
                    addressList: t.data.rows
                });
            }
        });
    },
    addAddress: function() {
        var t = this;
        wx.redirectTo({
            url: "/pages/sqsx_mx/sqsx_mx?id=0&index=" + t.data.index
        });
    },
    edit: function(t) {
        var e = this, a = t.currentTarget.dataset.id;
        wx.redirectTo({
            url: "/pages/sqsx_mx/sqsx_mx?id=" + a + "&index=" + e.data.index
        });
    },
    delete: function(e) {
        var a = this, s = e.currentTarget.dataset.id;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "deletesqsx",
                id: s,
                lx: a.data.index
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                0 == t.data.status ? wx.showToast({
                    title: "成功!",
                    icon: "success",
                    duration: 1e3,
                    success: function() {
                        a.getAddressList();
                    }
                }) : wx.showToast({
                    title: "提交失败!",
                    icon: "loading",
                    duration: 1500
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