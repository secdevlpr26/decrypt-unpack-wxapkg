var e = getApp(), o = require("../../../utils/util.js"), t = (require("../../../utils/rtcroom.js"), 
require("../../../getlogininfo.js")), a = require("../../../config.js");

Page({
    data: {
        adviserList: [],
        aideData: {},
        isSuc: null
    },
    go: function(e) {
        console.log(e.target.dataset), this.login(e.target.dataset.item.name), console.log(e.target.dataset.index, "uu");
    },
    login: function(e) {
        wx.showLoading({
            title: "登录信息获取中"
        });
        var o = this;
        t.getLoginInfo({
            type: "multi_room",
            opt: e,
            success: function(e) {
                console.log("success"), o.data.firstshow = !1, o.data.isGetLoginInfo = !0, console.log("我的昵称：", e.userName, e), 
                o.setData({
                    userName: e.userName
                }), wx.hideLoading(), o.creatroom(e.userName);
            },
            fail: function(e) {
                o.data.isGetLoginInfo = !1, console.log("***获取登录信息失败&&&getlogininfo***", e), wx.hideLoading(), 
                wx.showModal({
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
    creatroom: function(e) {
        var o = "../room/room?type=create&roomName=视频看房&userName=" + e + "&roomID=" + ("web_" + Date.now()) + "&isSuc=" + this.data.isSuc;
        wx.redirectTo({
            url: o
        }), wx.showToast({
            title: "进入房间",
            icon: "success",
            duration: 1e3
        });
    },
    onLoad: function(t) {
        var i = this;
        console.log("------********", t), i.setData({
            isSuc: t.isSuc || ""
        }), wx.request({
            url: o.newUrl() + "elab-marketing-authentication/worker/account/randomAdviser",
            method: "POST",
            data: {
                houseId: a.houseId
            },
            header: {
                "content-type": "application/json"
            },
            success: function(o) {
                console.log("看房小助手接口:", o), o.data.single ? (e.globalData.videoCustomer = i.aideData = o.data.single, 
                i.login(i.aideData)) : wx.showModal({
                    title: "提示",
                    content: "当前没有空闲的看房小助手",
                    showCancel: !1,
                    success: function(e) {
                        t.isSuc ? wx.redirectTo({
                            url: "../../chat/chat"
                        }) : wx.navigateBack({
                            changed: !0
                        });
                    }
                });
            },
            fail: function(e) {
                if (console.log("获取看房小助手接口失败: ", e), "request:fail timeout" == e.errMsg) var o = -1, a = "网络请求超时，请检查网络状态";
                t.fail && t.fail({
                    errCode: o || -1,
                    errMsg: a || "获取看房小助手接口失败，调试期间请点击右上角三个点按钮，选择打开调试"
                });
            }
        });
    }
});