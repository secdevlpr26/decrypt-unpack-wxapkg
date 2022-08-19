var o = require("../../../utils/rtcroom.js"), t = require("../../../getlogininfo.js");

Page({
    data: {
        roomName: "",
        roomList: [],
        userName: "",
        isGetLoginInfo: !1,
        firstshow: !0,
        tapTime: ""
    },
    getRoomList: function(t) {
        var e = this;
        e.data.isGetLoginInfo ? o.getRoomList({
            data: {
                index: 0,
                cnt: 20
            },
            success: function(o) {
                console.log(o), e.setData({
                    roomList: o.rooms
                }), console.log("拉取房间列表成功"), t && t();
            },
            fail: function(o) {
                console.log(o), wx.showModal({
                    title: "提示",
                    content: o.errMsg,
                    showCancel: !1
                }), t && t();
            }
        }) : wx.showModal({
            title: "提示",
            content: "登录信息初始化中，请稍后再试",
            showCancel: !1
        });
    },
    create: function() {
        var o = this, t = new Date();
        if (!(t - this.data.tapTime < 1e3)) if (o.data.isGetLoginInfo) {
            var e = "../roomname/roomname?type=create&roomName=" + o.data.roomName + "&userName=" + o.data.userName;
            wx.navigateTo({
                url: e
            }), o.setData({
                tapTime: t
            });
        } else wx.showModal({
            title: "提示",
            content: "登录信息初始化中，请稍后再试",
            showCancel: !1
        });
    },
    goRoom: function(o) {
        var t = new Date();
        if (!(t - this.data.tapTime < 1e3)) if (o.currentTarget.dataset.num > 3) wx.showModal({
            title: "提示",
            content: "房间人数已满",
            showCancel: !1,
            complete: function() {}
        }); else {
            var e = "../room/room?roomID=" + o.currentTarget.dataset.roomid + "&roomName=" + o.currentTarget.dataset.roomname + "&userName=" + this.data.userName;
            wx.navigateTo({
                url: e
            }), this.setData({
                tapTime: t
            });
        }
    },
    onLoad: function(o) {},
    onReady: function() {
        wx.showLoading({
            title: "登录信息获取中"
        });
        var o = this;
        console.log(this.data), t.getLoginInfo({
            type: "multi_room",
            success: function(t) {
                console.log("success"), o.data.firstshow = !1, o.data.isGetLoginInfo = !0, o.getRoomList(function() {}), 
                console.log("我的昵称：", t.userName), o.setData({
                    userName: t.userName
                }), wx.hideLoading();
            },
            fail: function(t) {
                o.data.isGetLoginInfo = !1, wx.hideLoading(), wx.showModal({
                    title: "获取登录信息失败",
                    content: t.errMsg,
                    showCancel: !1,
                    complete: function() {
                        wx.navigateBack({});
                    }
                });
            }
        });
    },
    onShow: function() {
        console.log("roomlist onshow"), !this.data.firstshow && this.getRoomList(function() {});
    },
    onHide: function() {},
    onUnload: function() {
        o.logout();
    },
    onPullDownRefresh: function() {
        this.getRoomList(function() {}), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            path: "/pages/main/main",
            imageUrl: "https://mc.qcloudimg.com/static/img/dacf9205fe088ec2fef6f0b781c92510/share.png"
        };
    }
});