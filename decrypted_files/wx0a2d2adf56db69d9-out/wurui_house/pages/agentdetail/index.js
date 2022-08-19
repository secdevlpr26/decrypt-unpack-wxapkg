require("../../resource/js/htmlToWxml.js"), require("../../resource/js/images.js");

var t = getApp();

Page({
    data: {
        id: 0,
        title: "",
        tel: "",
        pid: 1
    },
    onLoad: function(a) {
        if (wx.setNavigationBarTitle({
            title: wx.getStorageSync("companyinfo").name
        }), this.data.id > 0) e = this.data.id; else {
            var e = a.id;
            this.data.id = a.id;
        }
        var i = this;
        t.util.request({
            url: "entry/wxapp/getagentdetail",
            data: {
                id: e
            },
            success: function(t) {
                t.data.message.errno || (i.data.title = t.data.data.list.name + "-" + wx.getStorageSync("companyinfo").name, 
                i.data.tel = t.data.data.list.tel, wx.setNavigationBarTitle({
                    title: i.data.title
                }), console.log(t.data.data.oldhouselist), i.setData({
                    data: t.data.data.list,
                    list: t.data.data.oldhouselist,
                    activeCategoryId: 1
                }));
            },
            complete: function() {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    tabClick: function(a) {
        var e = a.currentTarget.id, i = this;
        i.data.pid = e;
        var o = i.data.id;
        t.util.request({
            url: "entry/wxapp/getagenthouse",
            data: {
                pid: e,
                id: o
            },
            success: function(t) {
                t.data.message.errno || i.setData({
                    list: t.data.data.houselist,
                    activeCategoryId: e
                });
            }
        });
    },
    toHouseDetail: function(t) {
        var a = t.currentTarget.dataset.id, e = this.data.pid;
        1 == e ? wx.navigateTo({
            url: "/wurui_house/pages/oldhousedetail/index?id=" + a
        }) : 2 == e ? wx.navigateTo({
            url: "/wurui_house/pages/lethousedetail/index?id=" + a
        }) : wx.navigateTo({
            url: "/wurui_house/pages/newhousedetail/index?id=" + a
        });
    },
    doCall: function(t) {
        console.log(t.currentTarget);
        var a = t.currentTarget.dataset.tel;
        wx.makePhoneCall({
            phoneNumber: a,
            success: function() {
                console.log("拨打电话成功！");
            },
            fail: function() {
                console.log("拨打电话失败！");
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this.onLoad();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: this.data.title,
            path: "/wurui_house/pages/agentdetail/index?id=" + this.data.id
        };
    }
});