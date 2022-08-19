var e = getApp(), t = require("../../../utils/util.js"), o = (require("../../../utils/rtcroom.js"), 
require("../../../getlogininfo.js"));

Page({
    onShareAppMessage: function() {
        return {
            imageUrl: e.globalData.shareImage || "",
            title: "分类",
            path: "/pages/classify/classify"
        };
    },
    data: {
        adviserList: []
    },
    go: function(e) {
        console.log(e.target.dataset), this.login(e.target.dataset.item.name), console.log(e.target.dataset.index, "uu");
    },
    login: function(e) {
        wx.showLoading({
            title: "登录信息获取中"
        });
        var t = this;
        console.log(this.data), o.getLoginInfo({
            type: "multi_room",
            success: function(o) {
                console.log("success"), t.data.firstshow = !1, t.data.isGetLoginInfo = !0, console.log("我的昵称：", o.userName, o), 
                t.setData({
                    userName: o.userName
                }), wx.hideLoading(), t.creatroom(o.userName, e);
            },
            fail: function(e) {
                t.data.isGetLoginInfo = !1, wx.hideLoading(), wx.showModal({
                    title: "获取登录信息失败",
                    content: e.errMsg,
                    showCancel: !1,
                    complete: function() {
                        wx.navigateBack({});
                    }
                });
            }
        });
    },
    creatroom: function(e, t) {
        var o = "../room/room?type=create&roomName=" + (e + "多人音视频") + "&userName=" + e + "&roomID=" + ("web_" + Date.now()) + "&consultantName=" + t;
        wx.redirectTo({
            url: o
        }), wx.showToast({
            title: "进入房间",
            icon: "success",
            duration: 1e3
        });
    },
    onLoad: function(o) {
        var a = this;
        e.getToken(function(o) {
            console.log(o, "tonken");
            var s = t.formatTime(new Date());
            console.log(s, "time"), wx.request({
                header: {
                    auth_token: o
                },
                url: t.url(),
                method: "POST",
                data: t.reformParam(t.adviserList, {
                    houseid: e.globalData.houseid,
                    time: s,
                    pageNo: "1",
                    pageSize: "100"
                }),
                success: function(e) {
                    a.setData({
                        adviserList: e.data.pageModel.resultSet
                    });
                }
            });
        });
    }
});